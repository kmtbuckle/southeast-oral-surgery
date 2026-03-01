import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request?.json?.();

    // Validate required fields
    if (
      !data?.fullName ||
      !data?.phone ||
      !data?.email ||
      !data?.procedureOfInterest ||
      !data?.preferredContactTime ||
      !data?.preferredLocation
    ) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Save to database
    const consultation = await prisma?.consultationRequest?.create({
      data: {
        fullName: data?.fullName ?? '',
        phone: data?.phone ?? '',
        email: data?.email ?? '',
        procedureOfInterest: data?.procedureOfInterest ?? '',
        preferredContactTime: data?.preferredContactTime ?? '',
        preferredLocation: data?.preferredLocation ?? 'no-preference',
        status: 'new',
      },
    });

    // Send email notification
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(to right, #0066CC, #004C99); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Consultation Request</h1>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border-left: 4px solid #0066CC;">
          <h2 style="color: #333; margin-top: 0;">Patient Information</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0; font-size: 16px;">
              <strong style="color: #0066CC;">Name:</strong> ${data?.fullName ?? 'N/A'}
            </p>
            <p style="margin: 10px 0; font-size: 16px;">
              <strong style="color: #0066CC;">Phone:</strong> 
              <a href="tel:${data?.phone ?? ''}" style="color: #0066CC; text-decoration: none;">
                ${data?.phone ?? 'N/A'}
              </a>
            </p>
            <p style="margin: 10px 0; font-size: 16px;">
              <strong style="color: #0066CC;">Email:</strong> 
              <a href="mailto:${data?.email ?? ''}" style="color: #0066CC; text-decoration: none;">
                ${data?.email ?? 'N/A'}
              </a>
            </p>
            <p style="margin: 10px 0; font-size: 16px;">
              <strong style="color: #0066CC;">Procedure of Interest:</strong> 
              ${data?.procedureOfInterest ?? 'N/A'}
            </p>
            <p style="margin: 10px 0; font-size: 16px;">
              <strong style="color: #0066CC;">Preferred Contact Time:</strong> 
              ${data?.preferredContactTime ?? 'N/A'}
            </p>
            <p style="margin: 10px 0; font-size: 16px;">
              <strong style="color: #0066CC;">Preferred Office Location:</strong> 
              ${data?.preferredLocation === 'charlotte' ? 'Charlotte' : data?.preferredLocation === 'albemarle' ? 'Albemarle' : 'No Preference'}
            </p>
          </div>
        </div>
        
        <div style="background: #e5e7eb; padding: 20px; text-align: center;">
          <p style="color: #666; font-size: 14px; margin: 5px 0;">
            Submitted at: ${new Date().toLocaleString('en-US', { 
              timeZone: 'America/New_York',
              dateStyle: 'full',
              timeStyle: 'long'
            })}
          </p>
          <p style="color: #666; font-size: 14px; margin: 5px 0;">
            Request ID: ${consultation?.id ?? 'N/A'}
          </p>
        </div>
      </div>
    `;

    // Get app URL for sender email
    const appUrl = process.env.NEXTAUTH_URL ?? '';
    const appName = appUrl ? new URL(appUrl)?.hostname?.split('.')?.[0] ?? 'Southeast Oral Surgery' : 'Southeast Oral Surgery';
    const senderEmail = appUrl ? `noreply@${new URL(appUrl)?.hostname}` : undefined;

    const emailResponse = await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        deployment_token: process.env.ABACUSAI_API_KEY,
        app_id: process.env.WEB_APP_ID,
        notification_id: process.env.NOTIF_ID_CONSULTATION_REQUEST,
        subject: `New Consultation Request from ${data?.fullName ?? 'a patient'}`,
        body: htmlBody,
        is_html: true,
        recipient_email: 'Kmtbuckle@gmail.com',
        sender_email: senderEmail,
        sender_alias: `${appName} Consultation System`,
      }),
    });

    const emailResult = await emailResponse?.json?.();
    
    if (!emailResult?.success && !emailResult?.notification_disabled) {
      console.error('Failed to send email notification:', emailResult?.message);
      // Continue anyway - the form was saved to the database
    }

    return NextResponse.json({
      success: true,
      message: 'Consultation request submitted successfully',
      id: consultation?.id,
    });
  } catch (error) {
    console.error('Error processing consultation request:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    );
  }
}

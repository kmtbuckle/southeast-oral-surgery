import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      doctorName,
      practiceName,
      doctorPhone,
      doctorEmail,
      doctorFax,
      patientName,
      patientPhone,
      patientDOB,
      patientEmail,
      reasonForReferral,
      urgency,
      preferredLocation,
      clinicalNotes,
    } = data;

    // Validate required fields
    if (!doctorName || !practiceName || !doctorPhone || !doctorEmail || !patientName || !patientPhone || !patientDOB) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save referral to database
    const referral = await prisma.referral.create({
      data: {
        doctorName,
        practiceName,
        doctorPhone,
        doctorEmail,
        doctorFax: doctorFax || null,
        patientName,
        patientPhone,
        patientDOB: new Date(patientDOB),
        patientEmail: patientEmail || null,
        reasonForReferral: reasonForReferral || null,
        urgency: urgency || 'routine',
        preferredLocation: preferredLocation || 'no-preference',
        clinicalNotes: clinicalNotes || null,
        status: 'new',
      },
    });

    // Send email notification
    try {
      const appName = 'Southeast Oral Surgery';
      const notificationId = process.env.NOTIF_ID_REFERRAL_FORM_SUBMISSION;

      if (notificationId) {
        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e3a5f;">New Patient Referral Received</h2>
            
            <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Referring Doctor</h3>
            <p><strong>Doctor:</strong> ${doctorName}</p>
            <p><strong>Practice:</strong> ${practiceName}</p>
            <p><strong>Phone:</strong> ${doctorPhone}</p>
            <p><strong>Email:</strong> ${doctorEmail}</p>
            ${doctorFax ? `<p><strong>Fax:</strong> ${doctorFax}</p>` : ''}
            
            <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 8px; margin-top: 20px;">Patient Information</h3>
            <p><strong>Name:</strong> ${patientName}</p>
            <p><strong>DOB:</strong> ${patientDOB}</p>
            <p><strong>Phone:</strong> ${patientPhone}</p>
            ${patientEmail ? `<p><strong>Email:</strong> ${patientEmail}</p>` : ''}
            
            <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 8px; margin-top: 20px;">Referral Details</h3>
            <p><strong>Reason:</strong> ${reasonForReferral || 'Not specified'}</p>
            <p><strong>Urgency:</strong> ${urgency || 'Routine'}</p>
            <p><strong>Preferred Location:</strong> ${preferredLocation || 'No preference'}</p>
            ${clinicalNotes ? `<p><strong>Clinical Notes:</strong><br/>${clinicalNotes.replace(/\n/g, '<br/>')}</p>` : ''}
            
            <hr style="margin-top: 20px; border: none; border-top: 1px solid #ddd;" />
            <p style="color: #666; font-size: 12px;">This referral was submitted through the Southeast Oral Surgery website.</p>
          </div>
        `;

        await fetch(`${process.env.ABACUS_NOTIFICATION_URL}/send`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.ABACUS_NOTIFICATION_API_KEY}`,
          },
          body: JSON.stringify({
            notification_id: notificationId,
            subject: `New Referral: ${patientName} from Dr. ${doctorName}`,
            html_content: emailHtml,
            from_name: appName,
          }),
        });
      }
    } catch (emailError) {
      console.error('Failed to send referral notification email:', emailError);
      // Continue even if email fails
    }

    return NextResponse.json(
      { success: true, referralId: referral.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing referral:', error);
    return NextResponse.json(
      { error: 'Failed to process referral' },
      { status: 500 }
    );
  }
}

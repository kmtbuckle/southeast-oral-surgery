'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReferralFormData {
  // Referring Doctor Info
  doctorName: string;
  practiceName: string;
  doctorPhone: string;
  doctorEmail: string;
  doctorFax: string;
  // Patient Info
  patientName: string;
  patientPhone: string;
  patientDOB: string;
  patientEmail: string;
  // Referral Details
  reasonForReferral: string;
  urgency: string;
  preferredLocation: string;
  clinicalNotes: string;
}

export default function ReferralForm() {
  const [formData, setFormData] = useState<ReferralFormData>({
    doctorName: '',
    practiceName: '',
    doctorPhone: '',
    doctorEmail: '',
    doctorFax: '',
    patientName: '',
    patientPhone: '',
    patientDOB: '',
    patientEmail: '',
    reasonForReferral: '',
    urgency: '',
    preferredLocation: '',
    clinicalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof ReferralFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit referral');
      }

      setSubmitStatus('success');
      setFormData({
        doctorName: '',
        practiceName: '',
        doctorPhone: '',
        doctorEmail: '',
        doctorFax: '',
        patientName: '',
        patientPhone: '',
        patientDOB: '',
        patientEmail: '',
        reasonForReferral: '',
        urgency: '',
        preferredLocation: '',
        clinicalNotes: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-xl bg-green-50 p-8 text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">Referral Submitted Successfully</h3>
        <p className="mt-2 text-gray-600">
          Thank you for your referral. We will contact the patient within one business day
          to schedule their consultation. A confirmation will be sent to your email.
        </p>
        <Button
          className="mt-6"
          onClick={() => setSubmitStatus('idle')}
        >
          Submit Another Referral
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
    >
      {submitStatus === 'error' && (
        <div className="mb-6 flex items-start space-x-3 rounded-lg bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            <p className="font-medium text-red-800">Submission Failed</p>
            <p className="mt-1 text-sm text-red-700">
              There was an error submitting your referral. Please try again or call our office.
            </p>
          </div>
        </div>
      )}

      {/* Referring Doctor Section */}
      <div className="mb-8">
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-lg font-semibold text-gray-900">
          Referring Doctor Information
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="doctorName" className="text-gray-700">Doctor Name</Label>
            <Input
              id="doctorName"
              value={formData.doctorName}
              onChange={(e) => handleInputChange('doctorName', e.target.value)}
              required
              className="mt-1"
              placeholder="Dr. John Smith"
            />
          </div>
          <div>
            <Label htmlFor="practiceName" className="text-gray-700">Practice Name</Label>
            <Input
              id="practiceName"
              value={formData.practiceName}
              onChange={(e) => handleInputChange('practiceName', e.target.value)}
              required
              className="mt-1"
              placeholder="Smith Family Dentistry"
            />
          </div>
          <div>
            <Label htmlFor="doctorPhone" className="text-gray-700">Office Phone</Label>
            <Input
              id="doctorPhone"
              type="tel"
              value={formData.doctorPhone}
              onChange={(e) => handleInputChange('doctorPhone', e.target.value)}
              required
              className="mt-1"
              placeholder="(704) 555-0123"
            />
          </div>
          <div>
            <Label htmlFor="doctorFax" className="text-gray-700">Office Fax</Label>
            <Input
              id="doctorFax"
              type="tel"
              value={formData.doctorFax}
              onChange={(e) => handleInputChange('doctorFax', e.target.value)}
              className="mt-1"
              placeholder="(704) 555-0124"
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="doctorEmail" className="text-gray-700">Email Address</Label>
            <Input
              id="doctorEmail"
              type="email"
              value={formData.doctorEmail}
              onChange={(e) => handleInputChange('doctorEmail', e.target.value)}
              required
              className="mt-1"
              placeholder="office@smithdentistry.com"
            />
          </div>
        </div>
      </div>

      {/* Patient Information Section */}
      <div className="mb-8">
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-lg font-semibold text-gray-900">
          Patient Information
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="patientName" className="text-gray-700">Patient Name</Label>
            <Input
              id="patientName"
              value={formData.patientName}
              onChange={(e) => handleInputChange('patientName', e.target.value)}
              required
              className="mt-1"
              placeholder="Patient's full name"
            />
          </div>
          <div>
            <Label htmlFor="patientDOB" className="text-gray-700">Date of Birth</Label>
            <Input
              id="patientDOB"
              type="date"
              value={formData.patientDOB}
              onChange={(e) => handleInputChange('patientDOB', e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="patientPhone" className="text-gray-700">Patient Phone</Label>
            <Input
              id="patientPhone"
              type="tel"
              value={formData.patientPhone}
              onChange={(e) => handleInputChange('patientPhone', e.target.value)}
              required
              className="mt-1"
              placeholder="(704) 555-0125"
            />
          </div>
          <div>
            <Label htmlFor="patientEmail" className="text-gray-700">Patient Email</Label>
            <Input
              id="patientEmail"
              type="email"
              value={formData.patientEmail}
              onChange={(e) => handleInputChange('patientEmail', e.target.value)}
              className="mt-1"
              placeholder="patient@email.com"
            />
          </div>
        </div>
      </div>

      {/* Referral Details Section */}
      <div className="mb-8">
        <h3 className="mb-4 border-b border-gray-200 pb-2 text-lg font-semibold text-gray-900">
          Referral Details
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="reasonForReferral" className="text-gray-700">Reason for Referral</Label>
            <Select
              value={formData.reasonForReferral}
              onValueChange={(value) => handleInputChange('reasonForReferral', value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select procedure" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wisdom-teeth">Wisdom Teeth Extraction</SelectItem>
                <SelectItem value="dental-implants">Dental Implants</SelectItem>
                <SelectItem value="bone-grafting">Bone Grafting</SelectItem>
                <SelectItem value="tooth-extraction">Tooth Extraction</SelectItem>
                <SelectItem value="jaw-surgery">Jaw Surgery (Orthognathic)</SelectItem>
                <SelectItem value="pathology">Oral Pathology</SelectItem>
                <SelectItem value="trauma">Facial Trauma</SelectItem>
                <SelectItem value="biopsy">Biopsy</SelectItem>
                <SelectItem value="tmj">TMJ Evaluation</SelectItem>
                <SelectItem value="consultation">General Consultation</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="urgency" className="text-gray-700">Urgency Level</Label>
            <Select
              value={formData.urgency}
              onValueChange={(value) => handleInputChange('urgency', value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select urgency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="routine">Routine (Within 2 weeks)</SelectItem>
                <SelectItem value="soon">Soon (Within 1 week)</SelectItem>
                <SelectItem value="urgent">Urgent (Within 48 hours)</SelectItem>
                <SelectItem value="emergency">Emergency (Same day)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="preferredLocation" className="text-gray-700">Preferred Location</Label>
            <Select
              value={formData.preferredLocation}
              onValueChange={(value) => handleInputChange('preferredLocation', value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="charlotte">Charlotte Office (Providence Road)</SelectItem>
                <SelectItem value="albemarle">Albemarle Office</SelectItem>
                <SelectItem value="no-preference">No Preference</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="clinicalNotes" className="text-gray-700">Clinical Notes</Label>
            <Textarea
              id="clinicalNotes"
              value={formData.clinicalNotes}
              onChange={(e) => handleInputChange('clinicalNotes', e.target.value)}
              className="mt-1"
              rows={4}
              placeholder="Please include relevant clinical history, radiographic findings, specific teeth involved, and any other pertinent information..."
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 sm:w-auto sm:px-12"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Referral'
          )}
        </Button>
        <p className="mt-3 text-center text-sm text-gray-500">
          We will confirm receipt and contact the patient within one business day.
        </p>
      </div>
    </motion.form>
  );
}

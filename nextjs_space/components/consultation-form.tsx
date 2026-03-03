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
import { Calendar, Clock, Mail, MapPin, Phone, User } from 'lucide-react';
import { motion } from 'framer-motion';
const FORMSPREE_URL = 'https://formspree.io/f/mykdrkzv';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  procedureOfInterest: string;
  preferredContactTime: string;
  preferredLocation: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    procedureOfInterest: '',
    preferredContactTime: '',
    preferredLocation: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const body = new URLSearchParams({
  fullName: formData.fullName,
  phone: formData.phone,
  email: formData.email,
  procedureOfInterest: formData.procedureOfInterest,
  preferredContactTime: formData.preferredContactTime,
  preferredLocation: formData.preferredLocation,
});

const response = await fetch(FORMSPREE_URL, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body,
});

      const result = await response?.json?.();

      if (response?.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Our team will contact you within 1 business day.',
        });
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          procedureOfInterest: '',
          preferredContactTime: '',
          preferredLocation: '',
        });
      } else {
        throw new Error(result?.message ?? 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again or call us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg"
    >
      <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
        Request a Consultation
      </h2>
      <p className="mb-8 text-center text-gray-600">
        Take the first step toward exceptional oral care
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <Label htmlFor="fullName" className="mb-2 block text-sm font-medium text-gray-700">
            Full Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              id="fullName"
              type="text"
              required
              value={formData?.fullName ?? ''}
              onChange={(e) => handleInputChange('fullName', e?.target?.value ?? '')}
              className="pl-10"
              placeholder="John Doe"
            />
          </div>
        </div>

        {/* Phone and Email */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <Label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
              Phone Number
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                id="phone"
                type="tel"
                required
                value={formData?.phone ?? ''}
                onChange={(e) => handleInputChange('phone', e?.target?.value ?? '')}
                className="pl-10"
                placeholder="(704) 555-0123"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                id="email"
                type="email"
                required
                value={formData?.email ?? ''}
                onChange={(e) => handleInputChange('email', e?.target?.value ?? '')}
                className="pl-10"
                placeholder="john@example.com"
              />
            </div>
          </div>
        </div>

        {/* Procedure of Interest */}
        <div>
          <Label htmlFor="procedure" className="mb-2 block text-sm font-medium text-gray-700">
            Procedure of Interest
          </Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Select
              value={formData?.procedureOfInterest ?? ''}
              onValueChange={(value) => handleInputChange('procedureOfInterest', value)}
              required
            >
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Select a procedure" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dental-implants">Dental Implants</SelectItem>
                <SelectItem value="wisdom-teeth">Wisdom Teeth Removal</SelectItem>
                <SelectItem value="bone-grafting">Bone Grafting</SelectItem>
                <SelectItem value="tooth-extraction">Tooth Extraction</SelectItem>
                <SelectItem value="jaw-surgery">Jaw Surgery</SelectItem>
                <SelectItem value="other">Other / General Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Preferred Contact Time and Location */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <Label htmlFor="contactTime" className="mb-2 block text-sm font-medium text-gray-700">
              Preferred Contact Time
            </Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Select
                value={formData?.preferredContactTime ?? ''}
                onValueChange={(value) => handleInputChange('preferredContactTime', value)}
                required
              >
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Select preferred time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                  <SelectItem value="anytime">Anytime</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="location" className="mb-2 block text-sm font-medium text-gray-700">
              Preferred Office Location
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Select
                value={formData?.preferredLocation ?? ''}
                onValueChange={(value) => handleInputChange('preferredLocation', value)}
                required
              >
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="charlotte">Charlotte</SelectItem>
                  <SelectItem value="albemarle">Albemarle</SelectItem>
                  <SelectItem value="no-preference">No Preference</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary py-6 text-lg font-medium hover:bg-primary/90"
          >
            {isSubmitting ? 'Submitting...' : 'Request Consultation'}
          </Button>
          <p className="mt-3 text-center text-sm text-gray-500">
            We&apos;ll contact you within one business day.
          </p>
        </div>

        {/* Status Message */}
        {submitStatus?.type && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-lg p-4 text-center ${
              submitStatus?.type === 'success'
                ? 'bg-green-50 text-green-800'
                : 'bg-red-50 text-red-800'
            }`}
          >
            {submitStatus?.message}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}

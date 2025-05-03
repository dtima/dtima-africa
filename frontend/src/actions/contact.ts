'use server';

import { z } from 'zod';
import { getSupabaseServer } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  organization: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Response type for the contact form submission
 */
export type ContactFormResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

/**
 * Server action to submit contact form data
 * 
 * @param formData Contact form data
 * @returns Response with success status and message
 */
export async function submitContactForm(formData: ContactFormData): Promise<ContactFormResponse> {
  try {
    // Validate form data
    const validationResult = contactFormSchema.safeParse(formData);
    
    if (!validationResult.success) {
      // Return validation errors
      return {
        success: false,
        message: 'Validation failed',
        errors: validationResult.error.flatten().fieldErrors,
      };
    }
    
    // Get Supabase client
    const supabase = getSupabaseServer();
    if (!supabase) {
      return {
        success: false,
        message: 'Failed to connect to database',
      };
    }
    
    // Insert contact message into database
    const { error } = await supabase
      .from('contact_messages')
      .insert({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        organization: formData.organization || null,
        status: 'new',
        created_at: new Date().toISOString(),
      });
    
    if (error) {
      console.error('Error submitting contact form:', error);
      return {
        success: false,
        message: 'Failed to submit form. Please try again later.',
      };
    }
    
    // Revalidate contact page to show updated submission status
    revalidatePath('/contact');
    
    return {
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
    };
    
  } catch (error) {
    console.error('Error in submitContactForm action:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
} 
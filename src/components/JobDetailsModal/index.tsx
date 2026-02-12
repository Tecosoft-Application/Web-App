"use client";

import { useState, useRef, useEffect } from "react";
import { X, Upload, ChevronDown } from "lucide-react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useLenis } from "../../../libs/react-lenis";
import { createApplication } from "@/api/create";
import { toast } from "react-toastify";
import { allowOnlyLetters, allowOnlyNumbers, preventLeadingSpace, preventSpaces } from "@/utills/form-validation";

export interface JobData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  intro?: string;
  whatYoullDo?: string[];
  whatWereLookingFor?: string[];
  niceToHave?: string[];
}

interface Props {
  open: boolean;
  onClose: () => void;
  job?: JobData | null;
}

interface ApplicationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  currentLocation: string;
  workExperience: string;
  linkedinPortfolio: string;
  attachment: File | null;
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .max(20, "Maximum 20 characters allowed")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed"),
  lastName: Yup.string()
    .required("Last name is required")
    .max(20, "Maximum 20 characters allowed")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed"),
  email: Yup.string()
    .required("Email is required")
    .test("no-spaces", "Email cannot contain spaces", (value) => {
      if (!value) return true;
      return !/\s/.test(value);
    })
    .email("Invalid email format"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(10, "Minimum 10 digits required")
    .max(15, "Maximum 15 digits allowed"),
  currentLocation: Yup.string()
    .required("Current location is required")
    .test("no-leading-space", "Cannot start with a space", (value) => {
      if (!value) return true;
      return value[0] !== " ";
    }),
  workExperience: Yup.string().required("Work experience is required"),
  linkedinPortfolio: Yup.string()
    .url("Please enter a valid URL")
    .required("LinkedIn/Portfolio link is required"),
  attachment: Yup.mixed()
    .required("Resume attachment is required")
    .test("fileSize", "File size must be less than 5MB", (value) => {
      if (!value) return false;
      return (value as File).size <= 5 * 1024 * 1024;
    })
    .test("fileType", "Only PDF, DOC, DOCX files are allowed", (value) => {
      if (!value) return false;
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      return allowedTypes.includes((value as File).type);
    }),
});

const WORK_EXPERIENCE_OPTIONS = [
  "Fresher",
  "0-1 years",
  "1-2 years",
  "2-3 years",
  "3-5 years",
  "5-7 years",
  "7-10 years",
  "10+ years",
];

const COUNTRY_CODES = [
  { code: "+91", country: "IN" },
  // { code: "+1", country: "US" },
  // { code: "+44", country: "UK" },
  // { code: "+61", country: "AU" },
  // { code: "+971", country: "UAE" },
];

function Tag({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-[#ccf1ff] px-2 py-0.5 text-[10px] xs:px-3 xs:py-1 xs:text-xs sm:text-sm font-medium text-[#005b80]">
      {text}
    </span>
  );
}

function JobDetailsView({
  job,
  onApply,
  onClose,
}: {
  job: JobData;
  onApply: () => void;
  onClose: () => void;
}) {
  return (
    <div
      data-lenis-prevent
      className="relative w-full rounded-xl sm:rounded-2xl bg-white shadow-2xl mx-auto px-2 py-2 xs:px-3 xs:py-3 lg:px-5 lg:py-5"
      style={{ maxHeight: "85vh", display: "flex", flexDirection: "column" }}
    >
      {/* Header */}
      <div className="flex-shrink-0 flex items-start justify-between border-b border-gray-200 bg-white px-3 py-3 xs:px-4 xs:py-4 sm:px-6  rounded-t-xl sm:rounded-t-2xl gap-2">
        <div className="flex-1 min-w-0">
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 truncate">
            {job.title}
          </h2>
          <div className="mt-1.5 xs:mt-2 flex flex-wrap gap-1.5 xs:gap-2">
            {job.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 flex-shrink-0">
          <button
            onClick={onApply}
            className="flex items-center gap-1 rounded-md bg-[#07af40] px-2 py-1.5 xs:px-3 xs:py-2 sm:px-5 sm:py-2.5 text-xs xs:text-sm sm:text-base font-semibold text-white hover:bg-[#069935] transition-colors cursor-pointer"
          >
            <span className="hidden xs:inline">Apply Job</span>
            <span className="xs:hidden">Apply</span>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.671875 6.34163L12.6719 6.34163M12.6719 6.34163L7.00521 0.674968M12.6719 6.34163L7.00521 12.0083"
                stroke="white"
                strokeWidth="1.35"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-200 p-1.5 xs:p-2 hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-4 w-4 xs:h-5 xs:w-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        data-lenis-prevent
        className="px-3 py-4 xs:px-4 xs:py-5 sm:px-6 sm:py-6  space-y-4 xs:space-y-5 sm:space-y-6 text-gray-700 no-scrollbar"
        style={{ overflowY: "auto", flex: 1, minHeight: 0 }}
      >
        {/* Intro */}
        {job.intro && (
          <p className="text-xs xs:text-sm sm:text-base leading-relaxed">
            {job.intro}
          </p>
        )}

        {/* What you'll do */}
        {job.whatYoullDo && job.whatYoullDo.length > 0 && (
          <section>
            <h3 className="mb-2 xs:mb-3 text-sm xs:text-base sm:text-lg font-semibold text-gray-900">
              What you'll do
            </h3>
            <ul className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm sm:text-base">
              {job.whatYoullDo.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 xs:mt-2 h-1 w-1 xs:h-1.5 xs:w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* What we're looking for */}
        {job.whatWereLookingFor && job.whatWereLookingFor.length > 0 && (
          <section>
            <h3 className="mb-2 xs:mb-3 text-sm xs:text-base sm:text-lg font-semibold text-gray-900">
              What we're looking for
            </h3>
            <ul className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm sm:text-base">
              {job.whatWereLookingFor.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 xs:mt-2 h-1 w-1 xs:h-1.5 xs:w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Nice to have */}
        {job.niceToHave && job.niceToHave.length > 0 && (
          <section>
            <h3 className="mb-2 xs:mb-3 text-sm xs:text-base sm:text-lg font-semibold text-gray-900">
              Nice to have
            </h3>
            <ul className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm sm:text-base">
              {job.niceToHave.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 xs:mt-2 h-1 w-1 xs:h-1.5 xs:w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

function ApplicationFormView({
  job,
  onClose,
}: {
  job: JobData;
  onBack: () => void;
  onClose: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const initialValues: ApplicationFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    currentLocation: "",
    workExperience: "",
    linkedinPortfolio: "",
    attachment: null,
  };

  const handleSubmit = async (
    values: ApplicationFormValues,
    { setSubmitting, resetForm }: FormikHelpers<ApplicationFormValues>,
  ) => {
    // Handle form submission logic here
    console.log("Form submitted:", values);
    const formData = new FormData();
    formData.append("first_name", values.firstName);
    formData.append("last_name", values.lastName);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("country", values.countryCode);
    formData.append("current_location", values.currentLocation);
    formData.append("work_experience", values.workExperience);
    formData.append("linkedin_portfolio", values.linkedinPortfolio);
    formData.append("attachment", values.attachment ?? new Blob());

    await createApplication(formData);
    toast.success("Application submitted successfully");
    setSubmitting(false);
    resetForm();
    onClose();

  };

  return (
    <div
      data-lenis-prevent
      className="relative w-full rounded-xl sm:rounded-2xl bg-white shadow-2xl mx-auto px-2 py-2 xs:px-3 xs:py-3 lg:px-5 lg:py-5"
      style={{ maxHeight: "85vh", display: "flex", flexDirection: "column" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ setFieldValue, isSubmitting, errors, touched }) => (
          <Form
            data-lenis-prevent
            className="flex flex-col overflow-hidden"
            style={{ maxHeight: "85vh" }}
          >
            {/* Header */}
            <div className="flex-shrink-0 flex items-start justify-between border-b border-gray-200 bg-white px-3 py-3 xs:px-4 xs:py-4 sm:px-6  rounded-t-xl sm:rounded-t-2xl gap-2">
              <div className="flex-1 min-w-0">
                <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 truncate">
                  {job.title}
                </h2>
                <div className="mt-1.5 xs:mt-2 flex flex-wrap gap-1.5 xs:gap-2">
                  {job.tags.map((tag, index) => (
                    <Tag key={index} text={tag} />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 flex-shrink-0">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-1 rounded-md bg-[#07af40] px-2 py-1.5 xs:px-3 xs:py-2 sm:px-5 sm:py-2 text-xs xs:text-sm sm:text-base font-semibold text-white hover:bg-[#069935] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : "Submit"}
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    className="ml-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.671875 6.34163L12.6719 6.34163M12.6719 6.34163L7.00521 0.674968M12.6719 6.34163L7.00521 12.0083"
                      stroke="white"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-gray-200 p-1.5 xs:p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4 xs:h-5 xs:w-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div
              data-lenis-prevent
              className="px-3 py-4 xs:px-4 xs:py-5 sm:px-6 sm:py-6 no-scrollbar  "
              style={{
                overflowY: "auto",
                flex: 1,
                minHeight: 0,
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5  ">
                {/* First Name */}
                <div className="min-h-[70px] xs:min-h-[76px]">
                  <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
                    First name<span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="firstName"
                    maxLength={20}
                    onKeyPress={allowOnlyLetters}
                    onKeyDown={preventLeadingSpace}
                    className={`w-full rounded-md border px-3 py-2 text-xs xs:text-sm outline-none focus:ring-1 focus:ring-green-500 ${errors.firstName && touched.firstName
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-green-500"
                      }`}
                    placeholder="Enter your first name"
                  />
                  <div className="h-4 mt-0.5">
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="text-[10px] xs:text-xs text-red-500"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="min-h-[70px] xs:min-h-[76px]">
                  <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
                    Last name<span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="lastName"
                    maxLength={20}
                    onKeyPress={allowOnlyLetters}
                    onKeyDown={preventLeadingSpace}
                    className={`w-full rounded-md border px-3 py-2 text-xs xs:text-sm outline-none focus:ring-1 focus:ring-green-500 ${errors.lastName && touched.lastName
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-green-500"
                      }`}
                    placeholder="Enter your last name"
                  />
                  <div className="h-4 mt-0.5">
                    <ErrorMessage
                      name="lastName"
                      component="p"
                      className="text-[10px] xs:text-xs text-red-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="min-h-[70px] xs:min-h-[76px]">
                  <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
                    Email address<span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="email"
                    type="text"
                    onKeyDown={preventSpaces}
                    className={`w-full rounded-md border px-3 py-2 text-xs xs:text-sm outline-none focus:ring-1 focus:ring-green-500 ${errors.email && touched.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-green-500"
                      }`}
                    placeholder="Enter your email address"
                  />
                  <div className="h-4 mt-0.5">
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-[10px] xs:text-xs text-red-500"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="min-h-[70px] xs:min-h-[76px]">
                  <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
                    Phone number<span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="relative flex-shrink-0">
                      <Field
                        as="select"
                        name="countryCode"
                        className="h-full rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-1.5 xs:px-2 sm:px-3 py-2 text-xs xs:text-sm text-gray-600 focus:border-green-500 focus:outline-none appearance-none pr-5 xs:pr-6 sm:pr-8"
                      >
                        {COUNTRY_CODES.map((item) => (
                          <option key={item.code} value={item.code}>
                            {item.code}
                          </option>
                        ))}
                      </Field>
                      <ChevronDown className="absolute right-0.5 xs:right-1 sm:right-2 top-1/2 -translate-y-1/2 h-3 w-3 xs:h-4 xs:w-4 text-gray-400 pointer-events-none" />
                    </div>
                    <Field
                      name="phone"
                      maxLength={15}
                      onKeyPress={allowOnlyNumbers}
                      className={`w-full rounded-r-md border px-3 py-2 text-xs xs:text-sm outline-none focus:ring-1 focus:ring-green-500 ${errors.phone && touched.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-green-500"
                        }`}
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="h-4 mt-0.5">
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-[10px] xs:text-xs text-red-500"
                    />
                  </div>
                </div>

                {/* Current Location */}
                <div className="min-h-[70px] xs:min-h-[76px]">
                  <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
                    Current location<span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="currentLocation"
                    className={`w-full rounded-md border px-3 py-2 text-xs xs:text-sm outline-none focus:ring-1 focus:ring-green-500 ${errors.currentLocation && touched.currentLocation
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-green-500"
                      }`}
                    placeholder="Enter your current location"
                  />
                  <div className="h-4 mt-0.5">
                    <ErrorMessage
                      name="currentLocation"
                      component="p"
                      className="text-[10px] xs:text-xs text-red-500"
                    />
                  </div>
                </div>

                {/* Work Experience */}
                <div className="min-h-[70px] xs:min-h-[76px]">
                  <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
                    Work Experience<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Field
                      as="select"
                      name="workExperience"
                      className={`w-full rounded-md border px-3 py-2 text-xs xs:text-sm outline-none focus:ring-1 focus:ring-green-500 appearance-none pr-8 ${errors.workExperience && touched.workExperience
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-green-500"
                        }`}
                    >
                      <option value="">Select</option>
                      {WORK_EXPERIENCE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                    <ChevronDown className="absolute right-2 xs:right-3 top-1/2 -translate-y-1/2 h-4 w-4 xs:h-5 xs:w-5 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="h-4 mt-0.5">
                    <ErrorMessage
                      name="workExperience"
                      component="p"
                      className="text-[10px] xs:text-xs text-red-500"
                    />
                  </div>
                </div>

                {/* LinkedIn/Portfolio */}
                <div className="sm:col-span-2 min-h-[70px] xs:min-h-[76px]">
                  <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
                    Linkedin/Portfolio<span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="linkedinPortfolio"
                    className={`w-full rounded-md border px-3 py-2 text-xs xs:text-sm outline-none focus:ring-1 focus:ring-green-500 ${errors.linkedinPortfolio && touched.linkedinPortfolio
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-green-500"
                      }`}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                  <div className="h-4 mt-0.5">
                    <ErrorMessage
                      name="linkedinPortfolio"
                      component="p"
                      className="text-[10px] xs:text-xs text-red-500"
                    />
                  </div>
                </div>

                {/* File Attachment */}
                <div className="sm:col-span-2">
                  <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1">
                    Attachment<span className="text-red-500">*</span>
                  </label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-3 xs:p-4 sm:p-6 text-center transition-colors ${errors.attachment && touched.attachment
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300 hover:border-gray-400"
                      }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(event) => {
                        const file = event.currentTarget.files?.[0];
                        if (file) {
                          setFieldValue("attachment", file);
                          setFileName(file.name);
                        }
                      }}
                    />
                    <p className="text-xs xs:text-sm text-gray-500 mb-2 xs:mb-3 truncate px-2">
                      {fileName || "No file chosen"}
                    </p>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 xs:gap-2 rounded-md border border-[#0098d4] px-3 py-1.5 xs:px-4 xs:py-2 text-xs xs:text-sm font-medium text-[#0098d4] hover:bg-[#0098d4]/5 transition-colors"
                    >
                      Upload file
                      <Upload className="h-3 w-3 xs:h-4 xs:w-4" />
                    </button>
                    <p className="mt-2 xs:mt-3 text-[10px] xs:text-xs text-gray-400">
                      PDF, DOCX, DOC | Max 5 MB
                    </p>
                  </div>
                  <div className="h-4 mt-0.5">
                    <ErrorMessage
                      name="attachment"
                      component="p"
                      className="text-[10px] xs:text-xs text-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default function JobDetailsModal({ open, onClose, job }: Props) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const lenis = useLenis();

  // Lock body scroll and stop Lenis when modal is open
  useEffect(() => {
    if (open) {
      if (lenis) {
        lenis.stop();
      }

      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        if (lenis) {
          lenis.start();
        }

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open, lenis]);

  // Default job data if none provided
  const defaultJob: JobData = {
    id: 0,
    title: "Product Designer",
    description: "We're seeking a passionate product designer.",
    tags: ["Remote", "Full time"],
    category: "Design",
    intro:
      "You'll collaborate with product managers, engineers, and stakeholders to design intuitive, user-centered digital products. You'll take ideas from concept to execution and turn complex problems into simple, elegant solutions.",
    whatYoullDo: [
      "Design user flows, wireframes, prototypes, and high-fidelity UI",
      "Work closely with product and engineering teams throughout the design process",
      "Translate user needs and business goals into clear design solutions",
      "Conduct basic user research and iterate based on feedback",
      "Contribute to and maintain design systems",
    ],
    whatWereLookingFor: [
      "2+ years of experience in product, UX, or UI design",
      "Strong portfolio demonstrating UX thinking and visual design",
      "Proficiency with Figma or similar design tools",
      "Good understanding of usability, accessibility, and interaction design",
      "Strong communication and collaboration skills",
    ],
    niceToHave: [
      "Experience with SaaS or complex digital products",
      "Familiarity with design systems and agile workflows",
    ],
  };

  const currentJob = job || defaultJob;

  const handleClose = () => {
    setShowApplicationForm(false);
    onClose();
  };

  const handleApply = () => {
    setShowApplicationForm(true);
  };

  const handleBack = () => {
    setShowApplicationForm(false);
  };

  if (!open) return null;

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[1100] flex items-center justify-center p-2 xs:p-3 sm:p-4"
    >
      {/* Overlay */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-[10px]"
      />

      {/* Modal Content */}
      <div data-lenis-prevent className="relative z-10 w-full max-w-4xl">
        {showApplicationForm ? (
          <ApplicationFormView
            job={currentJob}
            onBack={handleBack}
            onClose={handleClose}
          />
        ) : (
          <JobDetailsView
            job={currentJob}
            onApply={handleApply}
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}

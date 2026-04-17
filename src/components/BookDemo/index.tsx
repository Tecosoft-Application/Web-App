"use client";

import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { X, ChevronDown } from "lucide-react";
import { useLenis } from "../../../libs/react-lenis";
import { demoBooking } from "../../api/create";
import { toast } from "react-toastify";
import { allowOnlyLetters, allowOnlyNumbers, preventLeadingSpace, preventSpaces } from "@/utills/form-validation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { COUNTRIES } from "@/utills/country";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
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
    .test(
      "phone-length",
      "Please enter a valid phone number",
      (value) => {
        if (!value) return false;
        // Remove country code prefix (1-3 digits) — remaining digits should be at least 4
        const digitsOnly = value.replace(/\D/g, "");
        return digitsOnly.length >= 9 && digitsOnly.length <= 15;
      },
    ),
  country: Yup.string().required("Country is required"),
  message: Yup.string().test(
    "no-leading-space",
    "Cannot start with a space",
    (value) => {
      if (!value) return true;
      return value[0] !== " ";
    },
  ),
});



export default function BookDemoModal({ isOpen, onClose }: Props) {
  const lenis = useLenis();

  // Lock body scroll and stop Lenis when modal is open
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen, lenis]);

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>,
  ) => {
    console.log("Form submitted:", values);

    const payload = {
      first_name: values?.firstName,
      last_name: values?.lastName,
      email: values?.email,
      phone: `+${values?.phone}`,
      country: values?.country,
      message: values?.message,
    };
    // // Simulate API call
    await demoBooking(payload);
    // alert(JSON.stringify(values));
    toast.success("Demo request submitted successfully!");
    setSubmitting(false);
    resetForm();
    onClose();
  };



  if (!isOpen) return null;

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[1100] flex items-center justify-center p-2 xs:p-3 sm:p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[5px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        data-lenis-prevent
        className="relative z-50 w-full max-w-3xl rounded-xl sm:rounded-2xl bg-white shadow-xl  "
        style={{ maxHeight: "90vh", display: "flex", flexDirection: "column" }}
      >
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 xs:px-5 xs:py-4 sm:px-8 sm:py-5 border-b border-gray-100">
          <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-sky-600">
            Request a Personalised Demo
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 xs:p-2 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 xs:h-6 xs:w-6 text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        {/* Form Content */}
        <div
          data-lenis-prevent
          className="flex-1 overflow-y-auto px-4 py-4 xs:px-5 xs:py-5 sm:px-8 sm:py-6 no-scrollbar"
          style={{ minHeight: 0 }}
        >
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              country: "India",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({ errors, touched, isSubmitting, values, setFieldValue, setFieldTouched }) => (
              <Form className="grid grid-cols-1 gap-3 xs:gap-4 sm:gap-5 sm:grid-cols-2">
                {/* First Name */}
                <div className="min-h-[68px] xs:min-h-[74px]">
                  <label className="block text-xs xs:text-sm font-medium text-[#4F4F4F] mb-1">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="firstName"
                    maxLength={20}
                    className={`w-full rounded-md border px-3 py-2 text-xs xs:text-sm outline-none focus:ring-1 focus:ring-green-500 ${errors.firstName && touched.firstName
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-green-500"
                      }`}
                    placeholder="Enter your first name"
                    onKeyPress={allowOnlyLetters}
                    onKeyDown={preventLeadingSpace}
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
                <div className="min-h-[68px] xs:min-h-[74px]">
                  <label className="block text-xs xs:text-sm font-medium text-[#4F4F4F] mb-1">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="lastName"
                    maxLength={20}
                    className={`w-full rounded-md border px-3 py-2 text-xs xs:text-sm outline-none focus:ring-1 focus:ring-green-500 ${errors.lastName && touched.lastName
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-green-500"
                      }`}
                    onKeyPress={allowOnlyLetters}
                    onKeyDown={preventLeadingSpace}
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
                <div className="min-h-[68px] xs:min-h-[74px]">
                  <label className="block text-xs xs:text-sm font-medium text-[#4F4F4F] mb-1">
                    Email address <span className="text-red-500">*</span>
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

                {/* Phone */}
                <div className="min-h-[68px] xs:min-h-[74px]">
                  <label className="block text-xs xs:text-sm font-medium text-[#4F4F4F] mb-1">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <PhoneInput
                    country={"in"}
                    value={values.phone}
                    enableSearch
                    searchPlaceholder="Search country"
                    onChange={(value, countryData: { name?: string }) => {
                      setFieldValue("phone", value);
                      setFieldTouched("phone", true);
                      if (countryData?.name) {
                        const match = COUNTRIES.find(
                          (c) => c.toLowerCase() === countryData.name!.toLowerCase()
                        );
                        if (match) {
                          setFieldValue("country", match);
                        }
                      }
                    }}
                    onBlur={() => setFieldTouched("phone", true)}
                    inputStyle={{
                      width: "100%",
                      height: "38px",
                      fontSize: "14px",
                      borderRadius: "0.375rem",
                      borderColor: errors.phone && touched.phone ? "#ef4444" : "#d1d5db",
                    }}
                    buttonStyle={{
                      borderColor: errors.phone && touched.phone ? "#ef4444" : "#d1d5db",
                      borderRadius: "0.375rem 0 0 0.375rem",
                    }}
                    containerClass="!w-full"
                    inputClass="!w-full"
                  />
                  <div className="h-4 mt-0.5">
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-[10px] xs:text-xs text-red-500"
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="sm:col-span-2 min-h-[68px] xs:min-h-[74px]">
                  <label className="block text-xs xs:text-sm font-medium text-[#4F4F4F] mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Field
                      as="select"
                      name="country"
                      className={`w-full rounded-md border px-3 py-2 text-xs xs:text-sm outline-none focus:ring-1 focus:ring-green-500 appearance-none pr-8 ${errors.country && touched.country
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-green-500"
                        }`}
                    >
                      <option value="">Select Country</option>
                      {COUNTRIES.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </Field>
                    <ChevronDown className="absolute right-2 xs:right-3 top-1/2 -translate-y-1/2 h-4 w-4 xs:h-5 xs:w-5 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="h-4 mt-0.5">
                    <ErrorMessage
                      name="country"
                      component="p"
                      className="text-[10px] xs:text-xs text-red-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-xs xs:text-sm font-medium text-[#4F4F4F] mb-1">
                    How did you find us?
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    rows={3}
                    onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                      if (e.key === " " && (e.currentTarget.selectionStart ?? 0) === 0) {
                        e.preventDefault();
                      }
                    }}
                    className={`w-full rounded-md border px-3 py-2 text-xs xs:text-sm outline-none focus:ring-1 focus:ring-green-500 resize-none ${errors.message && touched.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-green-500"
                      }`}
                    placeholder="Enter your message (optional)"
                  />
                  <div className="h-4 mt-0.5">
                    <ErrorMessage
                      name="message"
                      component="p"
                      className="text-[10px] xs:text-xs text-red-500"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="sm:col-span-2 pt-1 xs:pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-md bg-green-500 py-2.5 xs:py-3 text-sm xs:text-base font-medium text-white hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Book a Demo"}

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.75 6.99998L12.25 6.99998M12.25 6.99998L7.29167 2.04165M12.25 6.99998L7.29167 11.9583"
                        stroke="white"
                        strokeWidth="1.35"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

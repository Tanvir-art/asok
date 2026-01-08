import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import waterMark from "../assets/react.svg";

const DottedInput = ({ label, name, value, onChange }) => (
  <div className="flex items-center gap-2 mb-3">
    <span className="whitespace-nowrap text-sm font-medium">{label}</span>
    <div className="relative flex-1">
      <div className="border-b border-dotted border-black h-6"></div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="absolute left-0 top-0 w-full h-full bg-transparent outline-none text-sm px-1"
      />
    </div>
  </div>
);

export default function MembershipForm() {
  const pdfRef = useRef(null);

  const [formData, setFormData] = useState({
    ref: "",
    member_date: "",
    member_no: "",
    approval_date: "",
    post_name: "",
    name_bn: "",
    father: "",
    name_en: "",
    mother: "",
    permanent_address: "",
    post: "",
    upazila: "",
    district: "",
    present_address: "",
    nationality: "",
    religion: "",
    dob: "",
    profession: "",
    age: "",
    education: "",
    mobile: "",
    nid: "",
    facebook: "",
    email: "",
    office_sign: null,
    applicant_sign: null,
  });

  // TEXT + FILE handler
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const imageURL = URL.createObjectURL(files[0]);
      setFormData((prev) => ({
        ...prev,
        [name]: imageURL,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
 const handleSubmit = async (e) => {
  e.preventDefault();

  const element = pdfRef.current;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    ignoreElements: (el) => el.classList.contains("no-print"),
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("membership_application.pdf");

  // ✅ PDF save হওয়ার পরে form clear
  setFormData({
    ref: "",
    member_date: "",
    member_no: "",
    approval_date: "",
    post_name: "",
    name_bn: "",
    father: "",
    name_en: "",
    mother: "",
    permanent_address: "",
    post: "",
    upazila: "",
    district: "",
    present_address: "",
    nationality: "",
    religion: "",
    dob: "",
    profession: "",
    age: "",
    education: "",
    mobile: "",
    nid: "",
    facebook: "",
    email: "",
    office_sign: null,
    applicant_sign: null,
  });
};


  return (
    <form
      ref={pdfRef}
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white p-10 relative font-serif shadow-xl rounded-md my-10"
    >
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={waterMark} alt="Watermark" className="w-[600px] opacity-10" />
      </div>

      <div className="relative z-10 text-black space-y-6">
        {/* Header */}
        <div className="flex justify-between gap-4">
          <div className="border border-black p-4 flex-1 space-y-2">
            <DottedInput label="Ref" name="ref" value={formData.ref} onChange={handleChange} />
            <DottedInput label="সদস্য পদ প্রাপ্তির তারিখ" name="member_date" value={formData.member_date} onChange={handleChange} />
            <DottedInput label="সদস্য/সদস্যা নং" name="member_no" value={formData.member_no} onChange={handleChange} />
            <DottedInput label="অনুমোদনের তারিখ" name="approval_date" value={formData.approval_date} onChange={handleChange} />
          </div>

          <div className="pt-6 flex justify-center items-center">
            <h2 className="text-2xl font-bold">সদস্য ফর্ম</h2>
          </div>

          <div className="border border-black p-4 flex-1">
            <DottedInput label="পদের নাম" name="post_name" value={formData.post_name} onChange={handleChange} />
          </div>
        </div>

        {/* Main Fields */}
        <div className="grid grid-cols-2 gap-x-6">
          <DottedInput label="নাম (বাংলা)" name="name_bn" value={formData.name_bn} onChange={handleChange} />
          <DottedInput label="পিতার নাম" name="father" value={formData.father} onChange={handleChange} />
          <DottedInput label="নাম (ইংরেজি)" name="name_en" value={formData.name_en} onChange={handleChange} />
          <DottedInput label="মাতার নাম" name="mother" value={formData.mother} onChange={handleChange} />
          <DottedInput label="স্থায়ী ঠিকানা" name="permanent_address" value={formData.permanent_address} onChange={handleChange} />
          <DottedInput label="পোঃ" name="post" value={formData.post} onChange={handleChange} />
          <DottedInput label="উপজেলা" name="upazila" value={formData.upazila} onChange={handleChange} />
          <DottedInput label="জেলা" name="district" value={formData.district} onChange={handleChange} />
        </div>

        <DottedInput label="বর্তমান ঠিকানা" name="present_address" value={formData.present_address} onChange={handleChange} />

        <div className="grid grid-cols-3 gap-x-6">
          <DottedInput label="জাতীয়তা" name="nationality" value={formData.nationality} onChange={handleChange} />
          <DottedInput label="ধর্ম" name="religion" value={formData.religion} onChange={handleChange} />
          <DottedInput label="জন্ম তারিখ" name="dob" value={formData.dob} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-3 gap-x-6">
          <DottedInput label="পেশা" name="profession" value={formData.profession} onChange={handleChange} />
          <DottedInput label="বয়স" name="age" value={formData.age} onChange={handleChange} />
          <DottedInput label="শিক্ষাগত যোগ্যতা" name="education" value={formData.education} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-2 gap-x-6">
          <DottedInput label="মোবাইল নম্বর" name="mobile" value={formData.mobile} onChange={handleChange} />
          <DottedInput label="এনআইডি নং" name="nid" value={formData.nid} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-2 gap-x-6">
          <DottedInput label="Facebook ID" name="facebook" value={formData.facebook} onChange={handleChange} />
          <DottedInput label="Email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <h3 className="text-center font-bold mt-6 mb-2">অঙ্গীকার নামা</h3>

        <p className="text-sm leading-relaxed text-justify">
          আমি .......................... এই মর্মে অঙ্গীকার করিতেছি যে, উপরোক্ত
          বিবরণী সত্য। গণতন্ত্র, পীড়িয়া সকল নিয়মকানুন জেনে ও বুঝিয়া আবেদন
          করিতেছি।
        </p>

        {/* Signatures */}
        <div className="flex justify-between mt-16">
          {/* Office */}
          <div className="text-center">
            <div className="h-16 w-44 border-b border-black mb-2 mx-auto flex items-center justify-center">
              {formData.office_sign && (
                <img src={formData.office_sign} alt="Office Sign" className="h-14 object-contain" />
              )}
            </div>
            <input type="file" accept="image/*" name="office_sign" onChange={handleChange} className="text-xs no-print" />
            <p className="text-sm mt-1">অফিস কর্তৃপক্ষের স্বাক্ষর</p>
          </div>

          {/* Applicant */}
          <div className="text-center">
            <div className="h-16 w-44 border-b border-black mb-2 mx-auto flex items-center justify-center">
              {formData.applicant_sign && (
                <img src={formData.applicant_sign} alt="Applicant Sign" className="h-14 object-contain" />
              )}
            </div>
            <input type="file" accept="image/*" name="applicant_sign" onChange={handleChange} className="text-xs no-print" />
            <p className="text-sm mt-1">আবেদনকারীর স্বাক্ষর</p>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="px-10 py-2 border-2 border-black font-semibold hover:bg-black hover:text-white transition rounded no-print"
          >
            আবেদন জমা দিন
          </button>
        </div>
      </div>
    </form>
  );
}

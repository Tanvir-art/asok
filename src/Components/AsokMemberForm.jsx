import { useState, useRef } from "react";
import { DottedInput } from "./DottedInput";
import formlogo from "../assets/logo.jpeg";

export default function AsokMemberForm() {
  const formRef = useRef();

  const handleDownload = () => {
    const printContent = formRef.current;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent.outerHTML;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  };

  return (
    <div className="relative">
      {/* Download Button */}
      <div className="fixed top-20 right-4 z-10">
        <button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Download
        </button>
      </div>

      <div ref={formRef} className="max-w-[900px] mx-auto bg-white text-black p-6 text-[14px] font-serif">

        {/* ================= HEADER ================= */}
        <div className="flex justify-between items-center gap-4 border-b pb-4 mx-[30px]">
          {/* Logo */}
          <div className="w-[170px] h-[170px]   ">
            <img src={formlogo} alt="form logo" />
          </div>

          {/* Right Text */}
          <div className="flex flex-col items-center justify-center text-center space-y-1">
            <p className="font-bold text-xl">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত</p>
            <p className="font-bold text-3xl">আইন সহায়তা কেন্দ্র ফাউন্ডেশন</p>
            <p className="font-bold text-2xl">AIN SOHAYOTA KENDRA FOUNDATION</p>
            <p className="text-lg">জাতিসংঘ ঘোষিত মানবাধিকার বাস্তবায়নে সচেষ্ট</p>
            <p className="text-lg">আন্তর্জাতিক মানবাধিকার সংস্থা</p>
          </div>
        </div>

        {/* ================= FORM TITLE ================= */}
        <div className="text-center my-6 font-bold text-lg">
          সদস্য ভর্তি ফরম
        </div>

        {/* ================= TOP FORM BOX (IMAGE LIKE) ================= */}
        <div className="grid grid-cols-2 gap-4 border p-4 mb-6">
          {/* Left */}
          <div className="space-y-2">
            <DottedInput label="ভর্তির তারিখ" name="member_date" value={formData.member_date} onChange={handleChange} />
            <DottedInput label="সদস্য/সদস্যা নং" name="member_no" value={formData.member_no} onChange={handleChange} />
            <DottedInput label="অনুমোদনের তারিখ" name="approval_date" value={formData.approval_date} onChange={handleChange} />
            <DottedInput label="জেলা" name="district" value={formData.district} onChange={handleChange} />
            <DottedInput label="উপজেলা" name="upazila" value={formData.upazila} onChange={handleChange} />
          </div>


          {/* Right */}
          <div className="flex flex-col justify-between border p-3">
            <DottedInput label="পদের নাম" name="post_name" value={formData.post_name} onChange={handleChange} />

            <div className="flex justify-between mt-8">
              <DottedInput label="সমন্বয়কারীর স্বাক্ষর" name="office_sign" value={formData.office_sign} onChange={handleChange} />
              <DottedInput label="অনুমোদন কর্তৃপক্ষ" name="applicant_sign" value={formData.applicant_sign} onChange={handleChange} />

            </div>
          </div>
        </div>

        {/* ================= PERSONAL INFO ================= */}
        <div className="space-y-4">

          {/* নাম */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <span>নাম (বাংলায়)</span>
              <input
                type="text"
                name="name_bn"
                value={formData.name_bn}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2 flex-1">
              <span>পিতা/স্বামীর নাম</span>
              <input
                type="text"
                name="father_or_hus"
                value={formData.father}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>
          </div>

          {/* English name */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <span>(ইংরেজি)</span>
              <input
                type="text"
                name="name_en"
                value={formData.name_en}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2 flex-1">
              <span>(ইংরেজি)</span>
              <input
                type="text"
                name="father_en"
                value={formData.father_en}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <span>স্থায়ী ঠিকানা – গ্রাম/মহল্লা</span>
              <input
                type="text"
                name="permanent_address"
                value={formData.permanent_address}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2 w-48">
              <span>পোস্ট</span>
              <input
                type="text"
                name="post"
                value={formData.post}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <span>থানা/উপজেলা</span>
              <input
                type="text"
                name="upazila"
                value={formData.upazila}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2 flex-1">
              <span>জেলা</span>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Present address */}
          <div>
            <span>বর্তমান ঠিকানা :</span>
            <input
              type="text"
              name="present_address"
              value={formData.present_address}
              onChange={handleChange}
              className="w-full mt-1 border-b border-dotted border-black bg-transparent outline-none"
            />
          </div>

          {/* Other info */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span>জাতীয়তা</span>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-24 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span>ধর্ম</span>
              <input
                type="text"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="w-24 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2 flex-1">
              <span>পেশা</span>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <span>জাতীয় পরিচয়পত্র নং</span>
              <input
                type="text"
                name="nid"
                value={formData.nid}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span>জন্ম তারিখ</span>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-32 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span>বয়স</span>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-20 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2 flex-1">
              <span>শিক্ষাগত যোগ্যতা</span>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span>মোবাইল নম্বর</span>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-32 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
              <span>অভিজ্ঞতা</span>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span>ফোন</span>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-32 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2 flex-1">
              <span>ই-মেইল</span>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 border-b border-dotted border-black bg-transparent outline-none"
              />
            </div>
          </div>

        </div>


        {/* ================= DECLARATION ================= */}
        <div className="mt-6">
          <p className="font-bold mb-2">অঙ্গীকার নামা</p>

          <p className="text-justify">
            আমি .................................................. এই মর্মে অঙ্গীকার করিতেছি যে,
            উপল্লিখিত বিবরণী সত্য। গণতান্ত্রিক প্রক্রিয়া সকল নিয়ম জেনে আবেদন করিতেছি।
            আমি জঙ্গিবাদ, মানবতা বিরোধী ও অসামাজিক, উগ্র, রাজনৈতিক দল বা গোষ্ঠীর সাথে
            সম্পৃক্ত ছিলাম না এবং এখনো নাই। আইন সহায়তা কেন্দ্র (আসক) ফাউন্ডেশনের যে কোন
            কার্যক্রমে কোন রাজনৈতিক দল, দেশদ্রোহী ও সমাজ বিরোধী সংগঠনের সংশ্লিষ্টতা
            বর্জনের শপথ করিতেছি।
          </p>
        </div>

        {/* ================= SIGNATURE ================= */}
        <div className="mt-10 space-y-4">
          <p>আবেদনকারীর স্বাক্ষর</p>

          <div className="flex justify-between">
            <p>অফিস কর্তৃপক্ষের স্বাক্ষর</p>
            <p>তারিখ ..............................</p>
          </div>
        </div>

        {/* ================= ATTACHMENTS ================= */}
        <div className="mt-6">
          <p>
            সংযুক্তি : ভোটার আইডি ফটোকপি, স্থানীয় জনপ্রতিনিধির প্রত্যয়নপত্র ও
            শিক্ষাগত যোগ্যতার ফটোকপি
          </p>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="mt-8 text-center font-bold">
          <div className="flex justify-between">
            <p>songostar karjo krom bissobepi </p>
            <p>হে বিশ্ববাসী সুন্দর পৃথিবীতে শান্তিতে বাঁচতে দাও</p>
          </div>
          <div className="mt-4 text-center text-sm">
            <p>রুম নং-৪২,৪৩ (৪র্থ তলা), মৌচাক সেন্টার পয়েন্ট শপিংমল, ৯২ সার্কুলার রোড, সিদ্ধেশ্বরী, ঢাকা</p>
            <p>ফোন : 02-9513188, মোবাইল : 01932376749 / 01750408926</p>
            <p>Email : asokfoundationbd.org@gmail.com / shandhabani@gmail.com</p>
            <p>Website : www.asokfoundationbd.org</p>
          </div>
        </div>

      </div>
      </div>
      );
}

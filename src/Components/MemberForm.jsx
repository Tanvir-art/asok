// import   { useRef, useState } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import waterMark from "../assets/react.svg";
// import { DottedInput } from "./DottedInput";

 

// export default function MembershipForm() {
//   const pdfRef = useRef(null);

//   const [formData, setFormData] = useState({
//     ref: "",
//     member_date: "",
//     member_no: "",
//     approval_date: "",
//     post_name: "",
//     name_bn: "",
//     father: "",
//     name_en: "",
//     mother: "",
//     permanent_address: "",
//     post: "",
//     upazila: "",
//     district: "",
//     present_address: "",
//     nationality: "",
//     religion: "",
//     dob: "",
//     profession: "",
//     age: "",
//     education: "",
//     mobile: "",
//     nid: "",
//     facebook: "",
//     email: "",
//     office_sign: null,
//     applicant_sign: null,
//   });

//   // TEXT + FILE handler
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (files) {
//       const imageURL = URL.createObjectURL(files[0]);
//       setFormData((prev) => ({
//         ...prev,
//         [name]: imageURL,
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };
//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   const element = pdfRef.current;

//   const canvas = await html2canvas(element, {
//     scale: 2,
//     useCORS: true,
//     backgroundColor: "#ffffff",
//     ignoreElements: (el) => el.classList.contains("no-print"),
//   });

//   const imgData = canvas.toDataURL("image/png");
//   const pdf = new jsPDF("p", "mm", "a4");

//   const pdfWidth = pdf.internal.pageSize.getWidth();
//   const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//   pdf.save("membership_application.pdf");

//   // ✅ PDF save হওয়ার পরে form clear
//   setFormData({
//     ref: "",
//     member_date: "",
//     member_no: "",
//     approval_date: "",
//     post_name: "",
//     name_bn: "",
//     father: "",
//     name_en: "",
//     mother: "",
//     permanent_address: "",
//     post: "",
//     upazila: "",
//     district: "",
//     present_address: "",
//     nationality: "",
//     religion: "",
//     dob: "",
//     profession: "",
//     age: "",
//     education: "",
//     mobile: "",
//     nid: "",
//     facebook: "",
//     email: "",
//     office_sign: null,
//     applicant_sign: null,
//   });
// };


//   return (
//     <form
//       ref={pdfRef}
//       onSubmit={handleSubmit}
//       className="max-w-4xl mx-auto bg-white p-10 relative font-serif shadow-xl rounded-md my-10"
//     >
//       {/* Watermark */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <img src={waterMark} alt="Watermark" className="w-[600px] opacity-10" />
//       </div>

//       <div className="relative z-10 text-black space-y-6">
//         {/* Header */}
//         <div className="flex justify-between gap-4">
//           <div className="border border-black p-4 flex-1 space-y-2">
//             <DottedInput label="Ref" name="ref" value={formData.ref} onChange={handleChange} />
//             <DottedInput label="সদস্য পদ প্রাপ্তির তারিখ" name="member_date" value={formData.member_date} onChange={handleChange} />
//             <DottedInput label="সদস্য/সদস্যা নং" name="member_no" value={formData.member_no} onChange={handleChange} />
//             <DottedInput label="অনুমোদনের তারিখ" name="approval_date" value={formData.approval_date} onChange={handleChange} />
//           </div>

//           <div className="pt-6 flex justify-center items-center">
//             <h2 className="text-2xl font-bold">সদস্য ফর্ম</h2>
//           </div>

//           <div className="border border-black p-4 flex-1">
//             <DottedInput label="পদের নাম" name="post_name" value={formData.post_name} onChange={handleChange} />
//           </div>
//         </div>

//         {/* Main Fields */}
//         <div className="grid grid-cols-2 gap-x-6">
//           <DottedInput label="নাম (বাংলা)" name="name_bn" value={formData.name_bn} onChange={handleChange} />
//           <DottedInput label="পিতার নাম" name="father" value={formData.father} onChange={handleChange} />
//           <DottedInput label="নাম (ইংরেজি)" name="name_en" value={formData.name_en} onChange={handleChange} />
//           <DottedInput label="মাতার নাম" name="mother" value={formData.mother} onChange={handleChange} />
//           <DottedInput label="স্থায়ী ঠিকানা" name="permanent_address" value={formData.permanent_address} onChange={handleChange} />
//           <DottedInput label="পোঃ" name="post" value={formData.post} onChange={handleChange} />
//           <DottedInput label="উপজেলা" name="upazila" value={formData.upazila} onChange={handleChange} />
//           <DottedInput label="জেলা" name="district" value={formData.district} onChange={handleChange} />
//         </div>

//         <DottedInput label="বর্তমান ঠিকানা" name="present_address" value={formData.present_address} onChange={handleChange} />

//         <div className="grid grid-cols-3 gap-x-6">
//           <DottedInput label="জাতীয়তা" name="nationality" value={formData.nationality} onChange={handleChange} />
//           <DottedInput label="ধর্ম" name="religion" value={formData.religion} onChange={handleChange} />
//           <DottedInput label="জন্ম তারিখ" name="dob" value={formData.dob} onChange={handleChange} />
//         </div>

//         <div className="grid grid-cols-3 gap-x-6">
//           <DottedInput label="পেশা" name="profession" value={formData.profession} onChange={handleChange} />
//           <DottedInput label="বয়স" name="age" value={formData.age} onChange={handleChange} />
//           <DottedInput label="শিক্ষাগত যোগ্যতা" name="education" value={formData.education} onChange={handleChange} />
//         </div>

//         <div className="grid grid-cols-2 gap-x-6">
//           <DottedInput label="মোবাইল নম্বর" name="mobile" value={formData.mobile} onChange={handleChange} />
//           <DottedInput label="এনআইডি নং" name="nid" value={formData.nid} onChange={handleChange} />
//         </div>

//         <div className="grid grid-cols-2 gap-x-6">
//           <DottedInput label="Facebook ID" name="facebook" value={formData.facebook} onChange={handleChange} />
//           <DottedInput label="Email" name="email" value={formData.email} onChange={handleChange} />
//         </div>

//         <h3 className="text-center font-bold mt-6 mb-2">অঙ্গীকার নামা</h3>

//         <p className="text-sm leading-relaxed text-justify">
//           আমি .......................... এই মর্মে অঙ্গীকার করিতেছি যে, উপরোক্ত
//           বিবরণী সত্য। গণতন্ত্র, পীড়িয়া সকল নিয়মকানুন জেনে ও বুঝিয়া আবেদন
//           করিতেছি।
//         </p>

//         {/* Signatures */}
//         <div className="flex justify-between mt-16">
//           {/* Office */}
//           <div className="text-center">
//             <div className="h-16 w-44 border-b border-black mb-2 mx-auto flex items-center justify-center">
//               {formData.office_sign && (
//                 <img src={formData.office_sign} alt="Office Sign" className="h-14 object-contain" />
//               )}
//             </div>
//             <input type="file" accept="image/*" name="office_sign" onChange={handleChange} className="text-xs no-print" />
//             <p className="text-sm mt-1">অফিস কর্তৃপক্ষের স্বাক্ষর</p>
//           </div>

//           {/* Applicant */}
//           <div className="text-center">
//             <div className="h-16 w-44 border-b border-black mb-2 mx-auto flex items-center justify-center">
//               {formData.applicant_sign && (
//                 <img src={formData.applicant_sign} alt="Applicant Sign" className="h-14 object-contain" />
//               )}
//             </div>
//             <input type="file" accept="image/*" name="applicant_sign" onChange={handleChange} className="text-xs no-print" />
//             <p className="text-sm mt-1">আবেদনকারীর স্বাক্ষর</p>
//           </div>
//         </div>

//         {/* Submit */}
//         <div className="flex justify-center mt-10">
//           <button
//             type="submit"
//             className="px-10 py-2 border-2 border-black font-semibold hover:bg-black hover:text-white transition rounded no-print"
//           >
//             আবেদন জমা দিন
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }


// export default function AsokVortiForm() {
//   return (
//     <div className="max-w-[900px] mx-auto bg-white text-black p-6 text-[14px] leading-relaxed font-serif">

//       {/* Header */}
//       <div className="text-center space-y-1">
//         <p className="font-bold">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত</p>
//         <h1 className="text-xl font-bold">আইন সহায়তা কেন্দ্র ফাউন্ডেশন</h1>
//         <h2 className="font-bold">AIN SOHAYOTA KENDRA FOUNDATION</h2>
//         <p>জাতিসংঘ ঘোষিত মানবাধিকার বাস্তবায়নে সচেষ্ট</p>
//         <p>আন্তর্জাতিক মানবাধিকার সংস্থা</p>
//         <p className="italic">“হে বিশ্ববাসী সুন্দর পৃথিবীতে শান্তিতে বাঁচতে দাও”</p>
//       </div>

//       {/* Address */}
//       <div className="mt-4 text-center text-sm">
//         <p>রুম নং-৪২,৪৩ (৪র্থ তলা), মৌচাক সেন্টার পয়েন্ট শপিংমল, ৯২ সার্কুলার রোড, সিদ্ধেশ্বরী, ঢাকা</p>
//         <p>ফোন : 02-9513188, মোবাইল : 01932376749 / 01750408926</p>
//         <p>Email : asokfoundationbd.org@gmail.com / shandhabani@gmail.com</p>
//         <p>Website : www.asokfoundationbd.org</p>
//       </div>

//       {/* Registration */}
//       <div className="mt-4 text-sm">
//         <p>এনজিও ব্যুরো - ৩৫৭৬</p>
//         <p>এনজিও সোসাইটি অ্যাক্ট - ৯৪১৭</p>
//         <p>নিবন্ধন (অবজারভার) নির্বাচন কমিশন (সাবেক) - ৮১/২০১৩ ও ১০/২০১৮</p>
//       </div>

//       {/* Meta fields */}
//       <div className="grid grid-cols-2 gap-4 mt-6">
//         <p>ভর্তির তারিখ ..................................</p>
//         <p>সদস্য/সদস্যা নং ...............................</p>
//         <p>অনুমোদনের তারিখ ..........................</p>
//         <p>জেলা ...........................................</p>
//         <p>উপজেলা .......................................</p>
//       </div>

//       <div className="mt-4">
//         <p>পদের নাম ...............................................................</p>
//       </div>

//       {/* Personal Info */}
//       <div className="mt-6 space-y-3">
//         <p>নাম (বাংলায়) ...................................................... পিতা/স্বামীর নাম ......................................................</p>
//         <p>(ইংরেজি) ......................................................... (ইংরেজি) .........................................................</p>

//         <p>স্থায়ী ঠিকানা - গ্রাম/মহল্লা ..................................................... পোস্ট ..............................................</p>
//         <p>থানা/উপজেলা ........................................ জেলা .................................................................</p>

//         <p>বর্তমান ঠিকানা :</p>
//         <p className="border-b border-dotted border-black h-6"></p>
//         <p className="border-b border-dotted border-black h-6"></p>

//         <p>জাতীয়তা .......................... ধর্ম .......................... পেশা ................................................</p>

//         <p>জাতীয় পরিচয়পত্র নং .......................................................... জন্ম তারিখ ..........................</p>

//         <p>বয়স ................. শিক্ষাগত যোগ্যতা .......................... মোবাইল নম্বর ..........................</p>

//         <p>অভিজ্ঞতা .......................... ফোন .......................... ই-মেইল ..........................</p>
//       </div>

//       {/* Declaration */}
//       <div className="mt-6">
//         <p className="font-bold">অঙ্গীকার নামা</p>
//         <p className="mt-2 text-justify">
//           আমি .................................................. এই মর্মে অঙ্গীকার করিতেছি যে,
//           উপল্লিখিত বিবরণী সত্য। গণতান্ত্রিক প্রক্রিয়া সকল নিয়ম জেনে আবেদন করিতেছি।
//           আমি জঙ্গিবাদ, মানবতা বিরোধী ও অসামাজিক, উগ্র, রাজনৈতিক দল বা গোষ্ঠীর সাথে সম্পৃক্ত ছিলাম না এবং এখনো নাই।
//           আইন সহায়তা কেন্দ্র (আসক) ফাউন্ডেশনের যে কোন কার্যক্রমে কোন রাজনৈতিক দল, দেশদ্রোহী ও সমাজ বিরোধী
//           সংগঠনের সংশ্লিষ্টতা বর্জনের শপথ করিতেছি।
//         </p>
//       </div>

//       {/* Signature */}
//       <div className="mt-10 flex justify-between">
//         <p>আবেদনকারীর স্বাক্ষর</p>
//         <div>
//           <p>অফিস কর্তৃপক্ষের স্বাক্ষর</p>
//           <p>তারিখ ..............................</p>
//         </div>
//       </div>

//       {/* Attachments */}
//       <div className="mt-6 text-sm">
//         <p>
//           সংযুক্তি : ভোটার আইডি ফটোকপি, স্থানীয় জনপ্রতিনিধির প্রত্যয়নপত্র ও শিক্ষাগত যোগ্যতার ফটোকপি
//         </p>
//       </div>

//       {/* Footer */}
//       <div className="mt-8 text-center font-bold">
//         সদস্য ভর্তি ফরম
//       </div>

//     </div>
//   );
// }




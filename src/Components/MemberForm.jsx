// import { useState, useRef } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// export default function MembershipForm() {
//   const [form, setForm] = useState({});
//   const [signaturePreview, setSignaturePreview] = useState(null);
//   const fileInputRef = useRef(null);

//   const openSignaturePicker = () => {
//     fileInputRef.current?.click();
//   };

//   const removeSignature = () => {
//     setForm({ ...form, signature: null });
//     setSignaturePreview(null);
//     if (fileInputRef.current) fileInputRef.current.value = null;
//   };

//   const handleChange = (e) => {
//     const { name, type, value, files } = e.target;

//     if (type === "file") {
//       const file = files?.[0];
//       setForm({ ...form, [name]: file });
//       setSignaturePreview(file ? URL.createObjectURL(file) : null);
//       return;
//     }

//     setForm({ ...form, [name]: value });
//   };

//   const submitForm = async (e) => {
//     e.preventDefault();

//     try {
//       // ===== Printable Node =====
//       const node = document.createElement("div");
//       node.style.width = "800px";
//       node.style.background = "#ffffff";
//       node.style.padding = "20px";
//       node.style.display = "flex";
//       node.style.fontFamily = "sans-serif";
//       node.style.color = "#000000";

//       // Left ribbon
//       const ribbon = document.createElement("div");
//       ribbon.style.width = "36px";
//       ribbon.style.marginRight = "14px";
//       ribbon.style.background =
//         "linear-gradient(to bottom, #dc2626, #ffffff 35%, #1e3a8a)";
//       node.appendChild(ribbon);

//       const content = document.createElement("div");
//       content.style.flex = "1";

//       // Header
//       const header = document.createElement("div");
//       header.style.display = "flex";
//       header.style.justifyContent = "space-between";
//       header.style.marginBottom = "10px";
//       header.innerHTML = `
//         <div>Ref: ${form.ref || ""}</div>
//         <div>Date: ${form.date || ""}</div>
//       `;
//       content.appendChild(header);

//       // Title
//       const title = document.createElement("h2");
//       title.innerText = "অভিযোগকারী তথ্য বিবরণী";
//       title.style.textAlign = "center";
//       title.style.textDecoration = "underline";
//       title.style.marginBottom = "14px";
//       content.appendChild(title);

//       // Helper
//       const row = (label, value) => {
//         const p = document.createElement("p");
//         p.innerHTML = `<strong>${label} :</strong> ${value || ""}`;
//         p.style.marginBottom = "6px";
//         content.appendChild(p);
//       };

//       row("সংগঠীত", form.org);
//       row("মাধ্যম", form.media);
//       row("আবেদনকারী", form.applicant);
//       row("স্থায়ী ঠিকানা", form.permanent);
//       row("বর্তমান ঠিকানা", form.present);
//       row("ফোন নম্বর", form.phone);
//       row("জাতীয়তা", form.nationality);
//       row("অভিযুক্ত/বিবাদীর নাম", form.accused);
//       row("বর্তমান ঠিকানা (বিবাদীর)", form.accused_present);
//       row("স্থায়ী ঠিকানা (বিবাদীর)", form.accused_permanent);
//       row("ফোন নম্বর (বিবাদীর)", form.accused_phone);
//       row("জাতীয়তা (বিবাদীর)", form.accused_nationality);

//       row("অভিযোগের কারণ", form.reason);
//       row("আইনী সহায়তার ধরন", form.help);
//       row("পূর্বের মামলা / সালিশ", form.previous);
//       row("সংক্ষিপ্ত বিবরণ", form.incident);

//       // Signature
//       if (signaturePreview) {
//         const sigWrap = document.createElement("div");
//         sigWrap.style.textAlign = "right";
//         sigWrap.style.marginTop = "20px";

//         const label = document.createElement("div");
//         label.innerText = "আবেদনকারীর স্বাক্ষর";
//         label.style.marginBottom = "6px";

//         const img = document.createElement("img");
//         img.src = signaturePreview;
//         img.style.maxWidth = "180px";

//         sigWrap.appendChild(label);
//         sigWrap.appendChild(img);
//         content.appendChild(sigWrap);
//       }

//       node.appendChild(content);
//       document.body.appendChild(node);

//       // ===== Canvas =====
//       const canvas = await html2canvas(node, {
//         scale: 2,
//         backgroundColor: "#ffffff",
//       });

//       const imgData = canvas.toDataURL("image/png");

//       // ===== PDF =====
//       const pdf = new jsPDF("p", "pt", "a4");
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("membership-form.pdf");

//       document.body.removeChild(node);
//     } catch (err) {
//       console.error("PDF generation failed", err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
//       <div className="w-[900px] bg-white shadow-xl rounded-lg px-10 py-8">
//         <h2 className="text-xl font-bold text-center underline mb-6">
//           অভিযোগকারী তথ্য বিবরণী
//         </h2>

//         <form onSubmit={submitForm} className="space-y-4">
//           <Field label="Ref" name="ref" onChange={handleChange} />
//           <Field label="Date" name="date" type="date" onChange={handleChange} />
//           <Field label="সংগঠীত" name="org" onChange={handleChange} />
//           <Field label="মাধ্যম" name="media" onChange={handleChange} />
//           <Field label="আবেদনকারী" name="applicant" onChange={handleChange} />
//           <Field label="স্থায়ী ঠিকানা" name="permanent" onChange={handleChange} />
//           <Field label="বর্তমান ঠিকানা" name="present" onChange={handleChange} />
//           <Field label="ফোন নম্বর" name="phone" onChange={handleChange} />
//           <Field label="জাতীয়তা" name="nationality" onChange={handleChange} />

//           <Field label="অভিযুক্ত/বিবাদীর নাম" name="accused" onChange={handleChange} />
//           <Field label="বর্তমান ঠিকানা (বিবাদীর)" name="accused_present" onChange={handleChange} />
//           <Field label="স্থায়ী ঠিকানা (বিবাদীর)" name="accused_permanent" onChange={handleChange} />
//           <Field label="ফোন নম্বর (বিবাদীর)" name="accused_phone" onChange={handleChange} />
//           <Field label="জাতীয়তা (বিবাদীর)" name="accused_nationality" onChange={handleChange} />

//           <Field textarea label="অভিযোগের কারণ" name="reason" onChange={handleChange} />
//           <Field textarea label="আইনী সহায়তার ধরন" name="help" onChange={handleChange} />
//           <Field textarea label="পূর্বের মামলা / সালিশ" name="previous" onChange={handleChange} />
//           <Field textarea label="সংক্ষিপ্ত বিবরণ" name="incident" onChange={handleChange} />

//           {/* Signature */}
//           <div className="text-right mt-6">
//             <div
//               className="cursor-pointer inline-block"
//               onClick={openSignaturePicker}
//             >
//               <div className="border-t border-black w-48"></div>
//               <p className="text-sm mt-1">আবেদনকারীর স্বাক্ষর</p>
//             </div>

//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               name="signature"
//               onChange={handleChange}
//               className="hidden"
//             />

//             {signaturePreview && (
//               <div className="mt-3 inline-block relative">
//                 <img src={signaturePreview} className="w-32 border" />
//                 <button
//                   type="button"
//                   onClick={removeSignature}
//                   className="absolute -top-2 -right-2 bg-red-600 text-white w-6 h-6 rounded-full"
//                 >
//                   ×
//                 </button>
//               </div>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold mt-6"
//           >
//             সাবমিট করুন
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// function Field({ label, textarea, name, type = "text", onChange }) {
//   return (
//     <div>
//       <label className="block text-sm font-semibold mb-1">{label}</label>
//       {textarea ? (
//         <textarea
//           name={name}
//           rows="3"
//           onChange={onChange}
//           className="w-full border rounded px-3 py-2"
//         />
//       ) : (
//         <input
//           type={type}
//           name={name}
//           onChange={onChange}
//           className="w-full border rounded px-3 py-2"
//         />
//       )}
//     </div>
//   );
// }



import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function MembershipForm() {
  const [form, setForm] = useState({});
  const printRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const downloadPDF = async () => {
    const canvas = await html2canvas(printRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("membership-form.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* ========= FORM INPUT ========= */}
      <div className="max-w-4xl mx-auto bg-white shadow rounded p-6 mb-10">
        <h2 className="text-xl font-bold text-center mb-6">
          সদস্য ফরম (Input)
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <Input label="Ref" name="ref" onChange={handleChange} />
          <Input label="Date" name="date" onChange={handleChange} />
          <Input label="সদস্য নং" name="memberNo" onChange={handleChange} />
          <Input label="পদের নাম" name="post" onChange={handleChange} />
          <Input label="নাম (বাংলা)" name="nameBn" onChange={handleChange} />
          <Input label="নাম (ইংরেজি)" name="nameEn" onChange={handleChange} />
          <Input label="পিতার নাম" name="father" onChange={handleChange} />
          <Input label="মাতার নাম" name="mother" onChange={handleChange} />
          <Input label="জাতীয়তা" name="nationality" onChange={handleChange} />
          <Input label="ধর্ম" name="religion" onChange={handleChange} />
          <Input label="জন্ম তারিখ" name="dob" onChange={handleChange} />
          <Input label="মোবাইল নম্বর" name="phone" onChange={handleChange} />
          <Input label="Email" name="email" onChange={handleChange} />
          <Input label="Facebook ID" name="facebook" onChange={handleChange} />
        </div>

        <button
          onClick={downloadPDF}
          className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded font-semibold"
        >
          Download PDF
        </button>
      </div>

      {/* ========= PRINT AREA ========= */}
      <div className="flex justify-center">
        <div
          ref={printRef}
          className="relative w-[794px] bg-white p-8 text-[13px] leading-6 text-black font-[serif]"
        >
          {/* Left Ribbon */}
          <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-b from-red-600 via-white to-blue-800" />

          {/* Header */}
          <div className="flex justify-between mb-2 pl-10">
            <div>Ref: {form.ref}</div>
            <div>Date: {form.date}</div>
          </div>

          {/* Title */}
          <h1 className="text-center font-bold underline mb-4 pl-10">
            সদস্য ফরম
          </h1>

          {/* Top Boxes */}
          <div className="flex gap-4 mb-4 pl-10">
            <div className="border p-3 w-1/2">
              <p>সদস্য পদ প্রাপ্তির তারিখ: .................</p>
              <p>সদস্য নং: {form.memberNo}</p>
              <p>অনুমোদনের তারিখ: .................</p>
            </div>
            <div className="border p-3 w-1/2">
              <p>পদের নাম: {form.post}</p>
            </div>
          </div>

          {/* Info Lines */}
          <div className="pl-10 space-y-1">
            <Line label="নাম (বাংলা)" value={form.nameBn} />
            <Line label="নাম (ইংরেজি)" value={form.nameEn} />
            <Line label="পিতার নাম" value={form.father} />
            <Line label="মাতার নাম" value={form.mother} />
            <Line label="জাতীয়তা" value={form.nationality} />
            <Line label="ধর্ম" value={form.religion} />
            <Line label="জন্ম তারিখ" value={form.dob} />
            <Line label="মোবাইল নম্বর" value={form.phone} />
            <Line label="Facebook ID" value={form.facebook} />
            <Line label="Email" value={form.email} />
          </div>

          {/* Declaration */}
          <div className="mt-6 pl-10 text-justify text-[12px]">
            আমি এই মর্মে অঙ্গীকার করিতেছি যে, উপরোক্ত বিবরণী সত্য।
            সংগঠনের সকল নিয়ম-কানুন মেনে চলবো এবং মানবাধিকার বিরোধী
            কোন কার্যক্রমে যুক্ত থাকবো না।
          </div>

          {/* Signature */}
          <div className="mt-12 flex justify-end pr-10">
            <div className="text-center">
              <div className="border-t border-black w-40 mb-1"></div>
              স্বাক্ষর
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== Helpers ===== */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input
        {...props}
        className="w-full border px-2 py-1 rounded mt-1"
      />
    </div>
  );
}

function Line({ label, value }) {
  return (
    <p>
      {label}: <span className="inline-block border-b border-dotted w-[420px]">
        {value}
      </span>
    </p>
  );
}

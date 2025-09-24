import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


// Zod schema
const MemberSchema = z.object({
    title: z.enum(["", "นาย", "นาง", "นางสาว"], "กรุณาเลือกคำนำหน้า"),
    firstName: z.string().trim().min(1, "กรุณากรอกชื่อ"),
    lastName: z.string().trim().min(1, "กรุณากรอกนามสกุล"),
    photoUrl: z.string().url("กรุณากรอก URL ที่ถูกต้อง").optional(),
    biography: z.string().optional(),
    achievements: z.string().optional(),
    ministerPosition: z.enum([
        "",
        "นายกรัฐมนตรี",
        "รองนายกรัฐมนตรี",
        "รัฐมนตรีว่าการกระทรวง",
        "รัฐมนตรีประจำสำนักนายกรัฐมนตรี",
        "รัฐมนตรีช่วยว่าการกระทรวง",
    ]).optional(),
    ministry: z.enum([
        "",
        "กระทรวงกลาโหม",
        "กระทรวงการคลัง",
        "กระทรวงศึกษาธิการ",
        "กระทรวงสาธารณสุข",
        "กระทรวงแรงงาน",
        "กระทรวงคมนาคม",
    ]).optional(),
    party: z.string().optional(),
});
type Member = z.infer<typeof MemberSchema>;


export default function MPForm() {
    const [members, setMembers] = useState<Member[]>([
        {
            title: "นางสาว",
            firstName: "แพทองธาร",
            lastName: "ชินวัตร",
            photoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Paetongtarn_Shinawatra_June_2025.jpg",
            biography: "เคยเป็นข้าราชการกระทรวงการคลัง",
            achievements: "ผ่านโครงการสำคัญหลายโครงการ",
            ministerPosition: "นายกรัฐมนตรี",
            ministry: "กระทรวงการคลัง",
            party: "พรรคเพื่อไทย",
        },
        {
            title: "นาย",
            firstName: "อนุทิน",
            lastName: "ชาญวีรกูล",
            photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Anutin_Charnvirakul_in_September_2025_%28cropped%29.png/330px-Anutin_Charnvirakul_in_September_2025_%28cropped%29.png",
            biography: "นักวิชาการด้านสาธารณสุข",
            achievements: "ผลงานด้านสุขภาพชุมชน",
            ministerPosition: "รองนายกรัฐมนตรี",
            ministry: "กระทรวงสาธารณสุข",
            party: "พรรคภูมิใจไทย",
        },
        {
            title: "นาย",
            firstName: "พีระพันธุ์",
            lastName: "สาลีรัฐวิภาค",
            photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pirapan_Salirathvibhaga%2C_2009.jpg/330px-Pirapan_Salirathvibhaga%2C_2009.jpg",
            biography: "เคยเป็นข้าราชการกระทรวงการคลัง",
            achievements: "ผ่านโครงการสำคัญหลายโครงการ",
            ministerPosition: "รองนายกรัฐมนตรี",
            ministry: "กระทรวงการคลัง",
            party: "พรรคประชาธิปัตย์",
        },
        {
            title: "นาย",
            firstName: "พิชัย",
            lastName: "ชุณหวชิร",
            photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pichai_Chunhavajira_2025.jpg",
            biography: "เคยเป็นข้าราชการกระทรวงการคลัง",
            achievements: "ผ่านโครงการสำคัญหลายโครงการ",
            ministerPosition: "รองนายกรัฐมนตรี",
            ministry: "กระทรวงการคลัง",
            party: "พรรคเพื่อไทย",
        },
        {
            title: "นาย",
            firstName: "ประเสริฐ",
            lastName: "จันทรรวงทอง",
            photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Prasert_Chantara-ruangthong%2C_March_14%2C_2024_%28cropped%29.jpg/375px-Prasert_Chantara-ruangthong%2C_March_14%2C_2024_%28cropped%29.jpg",
            biography: "เคยเป็นข้าราชการกระทรวงการคลัง",
            achievements: "ผ่านโครงการสำคัญหลายโครงการ",
            ministerPosition: "รองนายกรัฐมนตรี",
            ministry: "กระทรวงการคลัง",
            party: "พรรคเพื่อไทย",
        },
    ]);

    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<Member>({
        resolver: zodResolver(MemberSchema),
        defaultValues: {
            title: "",
            firstName: "",
            lastName: "",
            photoUrl: "",
            biography: "",
            achievements: "",
            ministerPosition: "",
            ministry: "",
            party: "",
        },
    });

    const onSubmit = (data: Member) => {
        if (editingIndex !== null) {
            setMembers(prev => prev.map((m, i) => i === editingIndex ? data : m));
            setEditingIndex(null);
        } else {
            setMembers(prev => [...prev, data]);
        }
        reset();
    };

    const handleDelete = (index: number) => {
        setMembers(prev => prev.filter((_, i) => i !== index));
        if (editingIndex === index) setEditingIndex(null);
    };

    const handleEdit = (index: number) => {
        const member = members[index];
        (Object.keys(member) as (keyof Member)[]).forEach((key) => {
            setValue(key, member[key]);
        });
        setEditingIndex(index);
    };



  return (
    <>
    <div className="mp-form-container">
      <h1>ฟอร์มสมาชิกสภาผู้แทนราษฎร</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>คำนำหน้า</label>
          <select {...register("title")}>
            <option value="">เลือกคำนำหน้า</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>
          {errors.title && <p className="error-message">{errors.title.message}</p>}
        </div>

        <div>
          <label>ชื่อ</label>
          <input type="text" {...register("firstName")} />
          {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
        </div>

        <div>
          <label>นามสกุล</label>
          <input type="text" {...register("lastName")} />
          {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
        </div>

        <div>
          <label>URL รูปถ่าย</label>
          <input type="text" {...register("photoUrl")} placeholder="https://example.com/photo.jpg" />
          {errors.photoUrl && <p className="error-message">{errors.photoUrl.message}</p>}
        </div>

        <div>
          <label>ประวัติการทำงาน</label>
          <textarea {...register("biography")} rows={4} />
        </div>

        <div>
          <label>ผลงานที่ผ่านมา</label>
          <textarea {...register("achievements")} rows={4} />
        </div>

        <div>
          <label>ตำแหน่งรัฐมนตรี</label>
          <select {...register("ministerPosition")}>
            <option value="">เลือกตำแหน่งรัฐมนตรี</option>
            <option value="นายกรัฐมนตรี">นายกรัฐมนตรี</option>
            <option value="รองนายกรัฐมนตรี">รองนายกรัฐมนตรี</option>
            <option value="รัฐมนตรีว่าการกระทรวง">รัฐมนตรีว่าการกระทรวง</option>
            <option value="รัฐมนตรีประจำสำนักนายกรัฐมนตรี">รัฐมนตรีประจำสำนักนายกรัฐมนตรี</option>
            <option value="รัฐมนตรีช่วยว่าการกระทรวง">รัฐมนตรีช่วยว่าการกระทรวง</option>
          </select>
        </div>

        <div>
          <label>กระทรวง</label>
          <select {...register("ministry")}>
            <option value="">เลือกกระทรวง</option>
            <option value="กระทรวงกลาโหม">กระทรวงกลาโหม</option>
            <option value="กระทรวงการคลัง">กระทรวงการคลัง</option>
            <option value="กระทรวงศึกษาธิการ">กระทรวงศึกษาธิการ</option>
            <option value="กระทรวงสาธารณสุข">กระทรวงสาธารณสุข</option>
            <option value="กระทรวงแรงงาน">กระทรวงแรงงาน</option>
            <option value="กระทรวงคมนาคม">กระทรวงคมนาคม</option>
          </select>
        </div>

        <div>
          <label>สังกัดพรรค</label>
          <input type="text" {...register("party")} />
        </div>

        <button type="submit">{editingIndex !== null ? "แก้ไขสมาชิก" : "เพิ่มสมาชิก"}</button>
      </form>

      <h2 className="mt-8">รายชื่อสมาชิก</h2>
      {members.length === 0 ? (
        <p className="text-gray-600">ยังไม่มีสมาชิก</p>
      ) : (
        <ul className="mp-member-list">
          {members.map((m, idx) => (
            <li key={idx}>
              {m.photoUrl && <img src={m.photoUrl} alt={`${m.firstName} ${m.lastName}`} />}
              <div className="member-info">
                <span className="font-medium">{m.title} {m.firstName} {m.lastName}</span>
                {m.ministerPosition && <span> | ตำแหน่ง: {m.ministerPosition}</span>}
                {m.ministry && <span> | กระทรวง: {m.ministry}</span>}
                {m.party && <span> | พรรค: {m.party}</span>}
              </div>
              <div className="member-actions">
                <button type="button" className="edit" onClick={() => handleEdit(idx)}>แก้ไข</button>
                <button type="button" className="delete" onClick={() => handleDelete(idx)}>ลบ</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
}
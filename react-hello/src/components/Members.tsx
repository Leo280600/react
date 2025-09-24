function LIST_MEMBERS ({group}:{group: string}) {
    type Member = {
    nameTH: string; // ชื่อภาษาไทย

    nameEN: string; // ชื่อภาษาอังกฤษ

    heightCm: number; // ส่วนสูง (เซนติเมตร)

    age: number; // อายุ (ปี)};

    imgUrl?: string; // URL ของรูปภาพ (ถ้ามี)

    group?: string; // กลุ่ม (ถ้ามี)
  };
  const LIST_MEMBERS: Member[] = [

    { nameTH: "อลัน พศวีร์ ศรีอรุโณทัย", nameEN: "Alan", heightCm: 185, age: 23, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2UgGReenEh3d13Ym82N9ri8LEpQLFZDVyzQ&s", group: "BUS" },

    { nameTH: "มาร์ค กฤษณ์ กัญจนาทิพย์", nameEN: "Marckris", heightCm: 172, age: 22, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/33.jpg", group: "BUS" },

    { nameTH: "ขุนพล ปองพล ปัญญามิตร", nameEN: "Khunpol", heightCm: 179, age: 22, imgUrl: "https://www.thairath.co.th/media/dFQROr7oWzulZx2b0i6I3g4edk9d1nKXKpZp8tYgqk.jpg", group: "BUS" },

    { nameTH: "ฮาร์ท ชุติวัฒน์ จันเคน", nameEN: "Heart", heightCm: 174, age: 22, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/22.jpg", group: "BUS" },

    { nameTH: "จินวุค คิม", nameEN: "Jinwook", heightCm: 178, age: 21, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/11.jpg", group: "BUS" },

    { nameTH: "ไทย ชญานนท์ ภาคฐิน", nameEN: "Thai", heightCm: 178, age: 20, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/55.jpg", group: "BUS" },

    { nameTH: "เน็กซ์ ณัฐกิตติ์ แช่มดารา", nameEN: "Nex", heightCm: 180, age: 20, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/44.jpg", group: "BUS" },

    { nameTH: "ภู ธัชชัย ลิ้มปัญญากุล", nameEN: "Phu", heightCm: 180, age: 20, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/66.jpg", group: "BUS" },

    { nameTH: "คอปเปอร์ เดชาวัต พรเดชาพิพัฒ", nameEN: "Copper", heightCm: 173, age: 19, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/77.jpg", group: "BUS" },

    { nameTH: "เอเอ อชิรกรณ์ สุวิทยะเสถียร", nameEN: "AA", heightCm: 178, age: 19, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/88.jpg", group: "BUS" },

    { nameTH: "จั๋ง ธีร์ บุญเสริมสุวงศ์", nameEN: "Jungt", heightCm: 173, age: 19, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/99.jpg", group: "BUS" },

    { nameTH: "ภีม วสุพล พรพนานุรักษ์", nameEN: "Peem", heightCm: 187, age: 19, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/00.jpg", group: "BUS" },

    { nameTH: "จินอู", nameEN: "Jinu", heightCm: 178, age: 26, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Jinu_at_the_2019_Korea_Music_Festival_%28cropped%29.jpg", group: "Sajaboy" },
    { nameTH: " ปริศนา", nameEN: "Mystery", heightCm: 165, age: 24, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/11.jpg", group: "Sajaboy" },
    { nameTH: "โรแมนซ์", nameEN: "Romance", heightCm: 170, age: 25, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/22.jpg", group: "Sajaboy" },
    { nameTH: "แอบบี้", nameEN: "abby", heightCm: 160, age: 23, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/33.jpg", group: "Sajaboy" },
    { nameTH: "Baby", nameEN: "Baby", heightCm: 162, age: 22, imgUrl: "https://s.isanook.com/ca/0/ud/276/1380541/44.jpg", group: "Sajaboy" },
  ];


  return (
 <>
       <ul>
        {LIST_MEMBERS.filter(member => member.group === group).map((member, index) => (
          <li key={index} className={group === "BUS" ? "green-txt" : "blue-txt"}>
            <h2>name : {member.nameTH} ({member.nameEN}) -- group: {member.group}</h2>
          </li>
        ))}
      </ul>
 </>
    );
}  
export default LIST_MEMBERS;
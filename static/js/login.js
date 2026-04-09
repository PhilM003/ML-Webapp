const pInput = document.getElementById('password-input');
const togglePassword = document.getElementById('togglePassword');
let realPassword = ""; // ตัวแปรเก็บรหัสผ่านจริงเหมือนเดิม
let isPasswordVisible = false; // ตัวแปรสถานะการมองเห็น

// ฟังก์ชันสำหรับ Update การแสดงผล
function updateDisplay(value) {
    if (isPasswordVisible) {
        // ถ้าอยู่ในโหมดเปิดตา แสดงรหัสผ่านจริง
        pInput.value = value;
    } else {
        // ถ้าอยู่ในโหมดปิดตา แสดงเป็น #
        pInput.value = "#".repeat(value.length);
    }
}

// 1. Logic การพิมพ์ (Masking) เดิมของคุณฟิล์มที่ปรับปรุงเล็กน้อย
pInput.addEventListener('input', (e) => {
    const val = e.target.value;

    // เราต้องจัดการค่า realPassword โดยอ้างอิงจากความยาวที่เปลี่ยนไป
    // เพราะถ้าเราลบตัวอักษรตอนเปิดตาอยู่ เราต้องลบจาก realPassword ด้วย
    if (isPasswordVisible) {
        realPassword = val;
    } else {
        // กรณีปิดตา (โหมดปกติ)
        if (val.length > realPassword.length) {
            // พิมพ์เพิ่ม: เอาตัวสุดท้ายที่พิมพ์เข้าไปใส่ใน realPassword
            realPassword += val.slice(-1);
        } else {
            // ลบ: ตัด realPassword ออกตามจำนวนที่ลบ
            realPassword = realPassword.slice(0, val.length);
        }
    }

    // Update หน้าจอ
    updateDisplay(realPassword);
    
    // เก็บค่าจริงไว้ใน dataset เผื่อเอาไปใช้ต่อ
    e.target.dataset.real = realPassword;
});

// 2. Logic การคลิกเปิด-ปิดตา (เพิ่มใหม่)
togglePassword.addEventListener('click', function () {
    // สลับสถานะ
    isPasswordVisible = !isPasswordVisible;

    // Update หน้าจอ
    updateDisplay(realPassword);

    // สลับ Icon ( eye <-> eye-slash )
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

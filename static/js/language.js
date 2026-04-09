
const translations = {
    'th': {
        'login_title': '< เข้าสู่ระบบ >',
        'register_title': '< สมัครสมาชิก >',
        'forgot_pass_title': '< ลืมรหัสผ่าน >',
        'user_label': 'ชื่อผู้ใช้งาน',
        'email_label': 'อีเมล',
        'pass_label': 'รหัสผ่าน',
        'login_btn': 'เข้าสู่ระบบ',
        'register_btn': 'สมัครสมาชิก',
        'forgot_pass': 'ลืมรหัสผ่าน?',
        'register': 'สมัครสมาชิก',
        'login_link': 'กลับไปหน้าเข้าสู่ระบบ',
        'send_reset_link': 'ส่งคำขอลืมรหัสผ่าน'
    },
    'en': {
        'login_title': '< Login >',
        'register_title': '< Register >',
        'forgot_pass_title': '< Forgot Password >',
        'user_label': 'Username',
        'email_label': 'Email',
        'pass_label': 'Password',
        'login_btn': 'Sign In',
        'register_btn': 'Sign Up',
        'forgot_pass': 'Forgot Password?',
        'register': 'Register',
        'login_link': 'Back to Login',
        'send_reset_link': 'Send Reset Link'
    },
    '中文': {
        'login_title': '< 登录 >',
        'register_title': '< 注册 >',
        'forgot_pass_title': '< 忘记密码 >',
        'user_label': '用户名',
        'email_label': '电子邮件',
        'pass_label': '密码',
        'login_btn': '登录',
        'register_btn': '注册',
        'forgot_pass': '忘密码？',
        'register': '立即注册',
        'login_link': '返回登录',
        'send_reset_link': '发送重置链接'
    }
};

function changeLanguage(lang) {
    // เก็บภาษาที่เลือกลงในเครื่อง (LocalStorage) คนเข้าใหม่จะได้ไม่ต้องกดเลือกซ้ำ
    localStorage.setItem('selectedLang', lang);
    
    // ค้นหาทุก Element ที่มี class "lang"
    const elements = document.querySelectorAll('.lang');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

// เมื่อโหลดหน้าเว็บ ให้เช็คว่าเคยเลือกภาษาอะไรไว้ไหม (ถ้าไม่มีให้ใช้ TH)
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'th';
    changeLanguage(savedLang);
});
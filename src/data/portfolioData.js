// =============================================
//  Portfolio Data - Falah Yudhistira Hanan
// =============================================

export const personal = {
  name: 'Falah Yudhistira Hanan',
  role: 'Software Engineer',
  roleAlt: 'Fullstack & Backend Developer',
  phone: '085161971784',
  email: 'falahyudhistira219@gmail.com',
  linkedin: 'https://linkedin.com/in/falahyudhistira',
  linkedinHandle: 'falahyudhistira',
  github: 'https://github.com/falah219',
  githubHandle: 'falah219',
  cvUrl: '#',
  summary:
    'Software Engineer dengan pengalaman pengembangan sistem Fullstack dan Backend berskala enterprise. Memiliki keahlian kuat dalam membangun arsitektur REST API, pemrosesan aliran data berkecepatan tinggi, dan pengelolaan database relasional maupun in-memory. Terbiasa bekerja dengan ekosistem Node.js (NestJS, Express), Java (SpringBoot), dan ReactJS. Berpengalaman dalam menerjemahkan kebutuhan klien menjadi solusi teknis yang efisien, mulai dari sistem HRIS terintegrasi hingga infrastruktur SCADA industri.',
};

export const skills = {
  backend: [
    { name: 'Node.js', icon: '🟩' },
    { name: 'NestJS', icon: '🔴' },
    { name: 'Express.js', icon: '⚡' },
    { name: 'Java SpringBoot', icon: '☕' },
    { name: 'Laravel', icon: '🔺' },
    { name: 'Python Flask', icon: '🐍' },
    { name: 'REST API', icon: '🔗' },
    { name: 'WebSockets', icon: '🔌' },
    { name: 'Microservices', icon: '🧩' },
  ],
  frontend: [
    { name: 'React.js', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'JavaScript', icon: '🟡' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '💅' },
    { name: 'jQuery', icon: '💎' },
    { name: 'JSP', icon: '☕' },
    { name: 'Bootstrap', icon: '💜' },
  ],
  database: [
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'MS SQL Server', icon: '🗄️' },
    { name: 'Redis', icon: '🔴' },
    { name: 'VictoriaMetrics', icon: '📈' },
    { name: 'Apache Kafka', icon: '📨' },
    { name: 'Sequelize ORM', icon: '🔧' },
  ],
  infrastructure: [
    { name: 'Kubernetes (K8s)', icon: '⎈' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Docker Compose', icon: '🐙' },
    { name: 'Google Cloud (GCP)', icon: '☁️' },
    { name: 'Tailscale VPN', icon: '🔒' },
    { name: 'Git / GitHub', icon: '🐱' },
    { name: 'Postman', icon: '📮' },
    { name: 'MVC Architecture', icon: '🏗️' },
  ],
};

export const experiences = [
  {
    id: 1,
    company: 'PT. PLN Icon Plus',
    role: 'Junior Software Developer',
    period: 'Februari 2025 – Saat Ini',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    color: 'indigo',
    points: [
      'Mengembangkan dan memelihara sistem backend untuk infrastruktur aplikasi SCADA dan HMI GIS (proyek GRITA) berskala besar menggunakan framework NestJS dan TypeScript.',
      'Merancang arsitektur pemrosesan aliran data (data streaming) berkecepatan tinggi, mengintegrasikan message broker Apache Kafka dengan database PostgreSQL.',
      'Membangun jalur komunikasi real-time berbasis WebSockets untuk memastikan pembaruan metrik dan status operasional tersampaikan dari server ke client tanpa latensi.',
      'Mengimplementasikan Redis sebagai in-memory cache untuk mengoptimalkan performa kueri dan memastikan sistem mampu menangani jutaan baris data secara efisien.',
      'Memanfaatkan VictoriaMetrics untuk melakukan pelacakan dan analisis tren data (trending data), memfasilitasi pencarian nilai frekuensi operasional dalam rentang waktu spesifik secara optimal.',
      'Mengelola deployment dan orkestrasi containerized microservices menggunakan Docker dan Kubernetes untuk memastikan skalabilitas, ketersediaan tinggi (high availability), dan keandalan sistem.',
    ],
    tags: ['NestJS', 'TypeScript', 'Kafka', 'WebSockets', 'Redis', 'VictoriaMetrics', 'Docker', 'Kubernetes', 'PostgreSQL'],
  },
  {
    id: 2,
    company: 'PT. Mutiara Solusindo',
    role: 'Fullstack Developer',
    period: 'Januari 2024 – Februari 2025',
    type: 'Full-time',
    location: 'Indonesia',
    color: 'violet',
    points: [
      'Merancang, mengembangkan, dan memelihara modul-modul inti pada aplikasi Human Resources Information System (HRIS) berbasis web.',
      'Membangun layanan backend menggunakan Java SpringBoot untuk menyediakan endpoint API dan fitur CRUD yang aman serta terukur.',
      'Mengembangkan antarmuka pengguna (UI) yang dinamis menggunakan Java Server Pages (JSP) dan jQuery untuk memastikan interaksi data secara real-time di sisi klien.',
      'Menulis, mengoptimalkan, dan memelihara Stored Procedures kompleks di Microsoft SQL Server untuk manajemen dan sinkronisasi data kepegawaian.',
      'Berkoordinasi secara langsung dengan klien (B2B) untuk mengumpulkan requirement, menganalisis masalah, dan mengimplementasikan fitur kustom HRIS, seperti sistem pergerakan rotasi karyawan (employee movement) dan pemetaan struktur organisasi.',
    ],
    tags: ['Java SpringBoot', 'JSP', 'jQuery', 'MS SQL Server', 'Stored Procedures', 'HRIS', 'REST API'],
  },
];

export const education = [
  {
    id: 1,
    institution: 'Universitas Muhammadiyah Surakarta',
    degree: 'S1 Teknik Informatika',
    period: '2019 – 2023',
    type: 'University',
    icon: '🎓',
    color: 'cyan',
    points: [
      'IPK: 3.81 / 4.00',
      'Proyek Akhir: Mengembangkan Sistem Informasi Penjualan E-Commerce menggunakan Laravel 9 dan MySQL, terintegrasi dengan Payment Gateway Midtrans untuk pemrosesan transaksi otomatis.',
    ],
    tags: ['Laravel', 'MySQL', 'PHP', 'Midtrans', 'E-Commerce'],
  },
  {
    id: 2,
    institution: 'Binar Academy',
    degree: 'Fullstack Web Student',
    period: 'Agustus 2022 – Maret 2023',
    type: 'Bootcamp',
    icon: '🚀',
    color: 'indigo',
    points: [
      'Membangun Single Page Application (SPA) menggunakan React JS dan mendesain RESTful API terintegrasi menggunakan Express JS.',
      'Mengimplementasikan manajemen database relasional dengan PostgreSQL dan Sequelize ORM, serta menyusun dokumentasi API yang komprehensif.',
    ],
    tags: ['React.js', 'Express.js', 'PostgreSQL', 'Sequelize ORM', 'SPA'],
  },
  {
    id: 3,
    institution: 'PT Informasi Teknologi Indonesia',
    degree: 'IT Developer Intern',
    period: 'September 2022 – November 2022',
    type: 'Internship',
    icon: '💼',
    color: 'violet',
    points: [
      'Mengembangkan aplikasi web menggunakan arsitektur MVC dengan PHP, HTML, dan Bootstrap.',
      'Membangun fungsionalitas CRUD dengan MySQL dan merancang sistem otomatisasi ekspor data ke format Excel dan PDF untuk kebutuhan pelaporan.',
    ],
    tags: ['PHP', 'MySQL', 'Bootstrap', 'MVC', 'HTML', 'Excel/PDF Export'],
  },
  {
    id: 4,
    institution: 'LBIPU UMS',
    degree: 'Web Developer (Project)',
    period: 'Agustus 2022 – September 2022',
    type: 'Project',
    icon: '🌐',
    color: 'emerald',
    points: [
      'Merancang dan mengembangkan website profil dan pendaftaran resmi lembaga menggunakan PHP, MySQL, dan Bootstrap 4 untuk mendukung digitalisasi program pelatihan bahasa Inggris.',
    ],
    tags: ['PHP', 'MySQL', 'Bootstrap 4', 'Web Development'],
  },
  {
    id: 5,
    institution: 'Bangkit Academy by Google, GoTo, Traveloka',
    degree: 'Cloud Computing Cohort',
    period: 'Februari 2022 – Juli 2022',
    type: 'Bootcamp',
    icon: '☁️',
    color: 'cyan',
    points: [
      'Berkolaborasi dalam tim lintas disiplin untuk merilis aplikasi "What\'s the Food", bertanggung jawab dalam pembuatan REST API menggunakan Python Flask.',
      'Mengonfigurasi dan melakukan deployment API ke Google Cloud Platform menggunakan Docker.',
    ],
    tags: ['Python Flask', 'Google Cloud Platform', 'Docker', 'REST API'],
  },
];

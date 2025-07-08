import { Logo } from "@once-ui-system/core";

const person = {
    firstName: "郑天一",
    lastName: "",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "课程与教学论硕士研究生",
    avatar: "/images/photo/IMG_9956.JPG",
    email: "zhengtianyi@example.com",
    phone: "18435186421",
    location: "河北", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["中文", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
    display: false, // 教育简历不需要newsletter
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>,
};

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/zhengtianyi",
    },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
    },
    {
        name: "Phone",
        icon: "email",
        link: `tel:${person.phone}`,
    },
];

const home = {
    path: "/",
    image: "/images/og/home.jpg",
    label: "首页",
    title: `${person.name} - 教育专业简历`,
    description: `课程与教学论硕士研究生，致力于教育创新与教学实践`,
    headline: <>用专业与热情点亮教育的未来</>,
    featured: {
        display: true,
        title: (
            <>
                最新成果: <strong className="ml-4">教育创新研究</strong>
            </>
        ),
        href: "/work/education-innovation-research",
    },
    subline: (
        <>
            我是郑天一，辽宁师范大学课程与教学论专业硕士研究生，专注于教育理论与实践的结合。
            <br />
            致力于成为一名优秀的教育工作者，用专业知识和创新思维推动教育发展。
        </>
    ),
};

const about = {
    path: "/about",
    label: "关于我",
    title: `关于我 – ${person.name}`,
    description: `了解${person.name}，课程与教学论专业硕士研究生，来自${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: true,
        link: "https://cal.com/zhengtianyi",
    },
    intro: {
        display: true,
        title: "个人简介",
        description: (
            <>
                郑天一，辽宁师范大学课程与教学论专业硕士研究生，中共党员，具有扎实的教育理论基础和丰富的实践经验。
                在校期间担任班长、党支部宣传员等职务，具备优秀的组织协调能力和团队合作精神。
                持有教师资格证，对教育事业充满热情，致力于通过创新教学方法提升学生学习效果。
            </>
        ),
    },
    work: {
        display: true, // set to false to hide this section
        title: "教育经历",
        experiences: [
            {
                company: "辽宁师范大学",
                timeframe: "2022.9 - 2025.6",
                role: "课程与教学论硕士研究生",
                achievements: [
                    <>深入研究课程设计与教学理论，参与多项教育研究项目，发表学术论文2篇。</>,
                    <>担任班长职务，组织班级活动，协调师生关系，获得"优秀学生干部"称号。</>,
                    <>担任党支部宣传员，负责党建工作宣传，组织主题党日活动，获得"优秀党员"称号。</>,
                ],
                images: [
                    // optional: leave the array empty if you don't want to display images
                    {
                        src: "/images/photo/IMG_9955.JPG",
                        alt: "辽宁师范大学",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                company: "辽宁师范大学",
                timeframe: "2018.9 - 2022.6",
                role: "教育学学士",
                achievements: [
                    <>系统学习教育学基础理论，掌握教育心理学、课程论、教学论等核心知识。</>,
                    <>参与教育实习，在中学进行教学实践，获得优秀实习生称号。</>,
                    <>获得校级奖学金3次，专业排名前10%，具备扎实的专业基础。</>,
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: true, // set to false to hide this section
        title: "学术成果",
        institutions: [
            {
                name: "教育创新研究论文",
                description: <>发表《基于核心素养的课程设计研究》等学术论文2篇。</>,
            },
            {
                name: "教育竞赛获奖",
                description: <>获得全国大学生教育创新竞赛二等奖，省级教学技能大赛三等奖。</>,
            },
            {
                name: "奖学金荣誉",
                description: <>连续三年获得校级奖学金，获得"优秀毕业生"称号。</>,
            },
        ],
    },
    technical: {
        display: true, // set to false to hide this section
        title: "专业技能",
        skills: [
            {
                title: "教学设计与实施",
                description: <>熟练掌握课程设计理论，能够根据学生特点设计个性化教学方案，运用多种教学方法提升教学效果。</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: "/images/photo/IMG_9954.JPG",
                        alt: "教学设计",
                        width: 16,
                        height: 9,
                    },
                    {
                        src: "/images/photo/IMG_9953.JPG",
                        alt: "教学实施",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                title: "教育技术应用",
                description: <>熟练运用多媒体教学技术，掌握在线教学平台操作，能够制作高质量教学课件和教学视频。</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: "/images/photo/IMG_9952.JPG",
                        alt: "教育技术",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                title: "学生管理与沟通",
                description: <>具备丰富的学生管理经验，善于与学生、家长、同事沟通，能够有效处理教育教学中的各种问题。</>,
                images: [],
            },
        ],
    },
    certificates: {
        display: true,
        title: "证书资质",
        items: [
            {
                name: "教师资格证",
                description: <>高中教师资格证，具备正式教学资质。</>,
            },
            {
                name: "普通话等级证书",
                description: <>普通话二级甲等，具备良好的语言表达能力。</>,
            },
            {
                name: "计算机等级证书",
                description: <>全国计算机等级考试二级，熟练运用办公软件。</>,
            },
        ],
    },
};

const blog = {
    path: "/blog",
    label: "教育思考",
    title: "分享教育理念与教学心得...",
    description: `阅读${person.name}的教育思考与教学实践`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work = {
    path: "/work",
    label: "教学作品",
    title: `教学作品集 – ${person.name}`,
    description: `${person.name}的教学设计与研究成果`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery = {
    path: "/gallery",
    label: "教学风采",
    title: `教学风采 – ${person.name}`,
    description: `${person.name}的教学活动照片集`,
    // Images by https://lorant.one
    // These are placeholder images, replace with your own
    images: [
        {
            src: "/images/photo/IMG_9951.JPG",
            alt: "教学实践",
            orientation: "horizontal",
        },
        {
            src: "/images/photo/IMG_9950.JPG",
            alt: "课堂互动",
            orientation: "horizontal",
        },
        {
            src: "/images/photo/IMG_9949.JPG",
            alt: "学生活动",
            orientation: "horizontal",
        },
        {
            src: "/images/photo/IMG_9948.JPG",
            alt: "教育研究",
            orientation: "horizontal",
        },
        {
            src: "/images/photo/IMG_9956.JPG",
            alt: "个人风采",
            orientation: "vertical",
        },
        {
            src: "/images/photo/IMG_9955.JPG",
            alt: "团队合作",
            orientation: "vertical",
        },
        {
            src: "/images/photo/IMG_9954.JPG",
            alt: "学术交流",
            orientation: "vertical",
        },
        {
            src: "/images/photo/IMG_9953.JPG",
            alt: "获奖时刻",
            orientation: "vertical",
        },
    ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

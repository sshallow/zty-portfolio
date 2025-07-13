import { Logo } from "@once-ui-system/core";

const person = {
    firstName: "郑天一",
    lastName: "",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "课程与教学论硕士研究生",
    avatar: "/images/photo/IMG_9956.JPG",
    email: "2845895318@qq.com",
    phone: "15633603951",
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
    // {
    //     name: "LinkedIn",
    //     icon: "linkedin",
    //     link: "https://www.linkedin.com/in/zhengtianyi",
    // },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
    },
    {
        name: "Phone",
        icon: "phone",
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
            我是郑天一，辽宁师范大学课程与教学论专业硕士研究生，中共党员，专注于教育理论与实践的结合。
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
                本科毕业于唐山师范学院小学教育专业，研究生期间担任办公室部长、党支部宣传委员等职务，具备优秀的组织协调能力和团队合作精神。
                持有小学语文教师资格证、普通话一乙证书，对教育事业充满热情，致力于通过创新教学方法提升学生学习效果。
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
                role: "课程与教学论专业硕士研究生",
                achievements: [
                    <>担任办公室部长，协调主席团及6个部门日常事务，组织记录30+场研究生会议，逐步优化跨部门沟通流程。</>,
                    <>担任研究生第二党支部宣传委员，负责党支部宣传工作，搭建支部多渠道宣传教育平台，提升党员思想意识和组织凝聚力。</>,
                    <>获得全国大学生技术创新创业大赛一等奖、第五届525"心上的中国"心理与研学设计大赛一等奖、校级讲课大赛二等奖等荣誉。</>,
                ],
                images: [
                    // optional: leave the array empty if you don't want to display images
                    {
                        src: "/images/photo/IMG_9955.JPG",
                        alt: "辽宁师范大学研究生生活",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                company: "唐山师范学院",
                timeframe: "2018.9 - 2022.6",
                role: "小学教育专业本科生",
                achievements: [
                    <>担任班长、教务处学生助理，负责统筹班级日常事务，策划组织百余场学术交流、实践分享活动。</>,
                    <>带领班级连续三年获得"校级优秀班集体"荣誉，协助教务处完成教学计划制定，处理500+人次课程报名及成绩录入工作。</>,
                    <>获得国家励志奖学金3次、河北省优秀毕业生、唐山市优秀毕业生、校级一等奖学金2次、优秀学生干部3次等荣誉。</>,
                ],
                images: [
                    {
                        src: "/images/photo/IMG_9954.JPG",
                        alt: "唐山师范学院本科生活",
                        width: 16,
                        height: 9,
                    },
                ],
            },
        ],
    },
    studies: {
        display: true, // set to false to hide this section
        title: "实践经历",
        institutions: [
            {
                name: "东北特钢职业技术学院",
                description: <>2024.03-2024.07担任代课教师，教授《普通话》和《模拟导游》两门课程，学生课程通过率100%。</>,
            },
            {
                name: "涵毅考研教育",
                description: <>2022.06-2023.06担任考研辅导老师，整理高频考点350+，提供院校选择、复试规划等1对1指导。</>,
            },
            {
                name: "朝阳教育",
                description: <>2018-2021年暑假担任辅导老师，进行小学、初中全科教学，累计教授学生人次150+。</>,
            },
            {
                name: "一对一辅导",
                description: <>利用本、研期间课余时间进行一对一辅导，累计授课300+学时，覆盖小学语文等6门学科，帮助30+学生提升成绩。</>,
            },
        ],
    },
    technical: {
        display: true, // set to false to hide this section
        title: "专业技能",
        skills: [
            {
                title: "教学设计与实施",
                description: <>熟练掌握课程设计理论，能够根据学生特点制定个性化教学计划，运用多种教学方法提升教学效果。具备丰富的教学实践经验。</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: "/images/photo/IMG_9953.JPG",
                        alt: "教学设计",
                        width: 16,
                        height: 9,
                    },
                    {
                        src: "/images/photo/IMG_9952.JPG",
                        alt: "教学实施",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                title: "计算机与外语能力",
                description: <>熟练运用Microsoft Office办公软件、SPSS统计软件，英语六级水平，熟练进行英语读写译。</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: "/images/photo/IMG_9951.JPG",
                        alt: "计算机技能",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                title: "组织管理与沟通",
                description: <>具备丰富的学生管理经验，善于与学生、家长、同事沟通，能够有效处理教育教学中的各种问题。具备优秀的组织协调能力。</>,
                images: [],
            },
        ],
    },
    certificates: {
        display: true,
        title: "证书资质",
        items: [
            {
                name: "小学语文教师资格证",
                description: <>具备正式教学资质，可以从事小学语文教学工作。</>,
            },
            {
                name: "普通话一乙证书",
                description: <>普通话水平达到一乙等级，具备良好的语言表达能力。</>,
            },
            {
                name: "英语六级证书",
                description: <>英语水平达到六级，熟练进行英语读写译。</>,
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
            src: "/images/photo/IMG_9950.JPG",
            alt: "教学实践",
            orientation: "horizontal",
        },
        {
            src: "/images/photo/IMG_9949.JPG",
            alt: "课堂互动",
            orientation: "horizontal",
        },
        {
            src: "/images/photo/IMG_9948.JPG",
            alt: "学生活动",
            orientation: "vertical",
        },
    ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

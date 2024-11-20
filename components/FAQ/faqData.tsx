import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What services do you offer as a Microsoft Certified Partner?",
    ans: "<div><div>As a Microsoft Certified Partner, we provide a wide range of services, including: </div>" +
      "<ul className='ml-10 mb-3'><li>• Implementation of Microsoft Dynamics 365 F&O, Microsoft Dynamics 365 BC, Microsoft Dynamics 365 CE, Power BI, PowerApps, Azure, and other Microsoft solutions</li>" +
      "<li>• Support and maintenance for existing Microsoft software</li>" +
      "<li>• Licensing and subscription management for Microsoft products</li>" +
      "<li>• Customization and integration with other business applications</li>" +
      "<li>• On-demand IT services and troubleshooting</li>" +
      "<li>• 24/7 system monitoring and round-the-clock support</li></ul></div>",
  },
  {
    id: 2,
    quest: "What is your process for implementing Microsoft solutions?",
    ans: "<div><ul className='ml-10 mb-3'><li>• Our implementation process follows these key phases:</li>" +
      "<li>• Discovery & Planning: We assess your business requirements and objectives.</li>" +
      "<li>• Design: We design a tailored solution based on your needs.</li>" +
      "<li>• Development & Customization: We customize the platform, adding integrations and automating processes.</li>" +
      "<li>• Deployment: We deploy the solution, ensuring a smooth transition with minimal disruption.</li > " +
      "<li>• Training & Go-Live: We provide hands-on training for users and offer post-go-live support.</li></ul></div>",
  },
  {
    id: 3,
    quest: "Do you offer postimplementation support and maintenance?",
    ans: "<div><ul className='ml-10 mb-3'><li>• Yes, we offer comprehensive postimplementation support and maintenance packages. Our services include:</li>" +
      "<li>• Regular software updates and patch management</li>" +
      "<li>• Troubleshooting issues and bug fixes</li>" +
      "<li>• Performance monitoring and optimization</li>" +
      "<li>• User training and ongoing consultation</li>" +
      "<li>• Helpdesk support (email, phone, or remote assistance).</li></ul></div>",
  },
  {
    id: 4,
    quest: "How do you handle Microsoft licensing for my business?",
    ans: "<div><ul className='ml-10 mb-3'><li>• As a Microsoft Certified Partner, we help you choose the right licensing model based on your business needs. We provide assistance in:</li>" +
      "<li>• Acquiring Microsoft product licenses (e.g., Office 365, Dynamics 365, Azure)</li>" +
      "<li>• Managing license renewals and upgrades</li>" +
      "<li>• Scaling licenses according to your team size and business growth</li>" +
      "<li>• Ensuring compliance with Microsoft licensing policies.</li></ul></div>",
  },
  {
    id: 5,
    quest: "Do you offer 24/7 support for critical systems?",
    ans: "<div><ul className='ml-10 mb-3'><li>• Yes, we offer round-the-clock support for mission-critical systems. Our dedicated support team is available 24/7 to monitor your systems and resolve issues as they arise. We ensure minimal downtime with proactive system health monitoring, and we offer service-level agreements (SLAs) tailored to your operational needs." +
      "</li></ul></div>",
  },
  {
    id: 6,
    quest: "Can I request on-demand services for specific business needs?",
    ans: "<div><div>Yes, we provide on-demand services based on your business requirements. Whether you need additional support during peak periods, customized developments, or specific project-based services, we can offer:</div>" +
      "<ul className='ml-10 mb-3'><li>• Ad-hoc troubleshooting</li>" +
      "<li>• Custom software modifications</li>" +
      "<li>• Additional integrations</li>" +
      "<li>• Temporary resource augmentation</li>" +
      "<li>• IT consulting on demand.</li></ul></div>",
  },
  {
    id: 7,
    quest: "How do you ensure data security during and after implementation?",
    ans: "<div><div>We prioritize data security by adhering to Microsoft’s stringent security protocols. We implement best practices, including:</div>" +
      "<ul className='ml-10 mb-3'><li>• Role-based access control (RBAC)</li>" +
      "<li>• Data encryption (at rest and in transit)</li>" +
      "<li>• Multifactor authentication (MFA)</li>" +
      "<li>• Regular security assessments and vulnerability testing</li>" +
      "<li>• Backup and disaster recovery solutions to protect against data loss.</li></ul></div>",
  },
  {
    id: 8,
    quest: "What SLAs do you offer for support and maintenance?",
    ans: "<div><div>We offer customizable Service Level Agreements (SLAs) based on your business needs. Our SLAs cover:</div>" +
      "<ul className='ml-10 mb-3'><li>• Response time for critical, high, medium, and low-priority issues</li>" +
      "<li>• Resolution time targets</li>" +
      "<li>• Availability of 24/7 support for critical systems</li>" +
      "<li>• Guaranteed uptime for hosted solutions</li>" +
      "<li>• Proactive monitoring and periodic system health checks.</li></ul></div>",
  },
  {
    id: 9,
    quest: "What are the typical costs associated with your services?",
    ans: "<div><div>Our pricing varies based on the specific services you require. We provide: Implementation Costs: Based on project scope, complexity, and customization.</div>" +
      "<ul className='ml-10 mb-3'><li>• Support & Maintenance: Flexible plans based on the number of users, systems in use, and required support levels.</li>" +
      "<li>• Licensing: We offer guidance on the best licensing model and pricing based on your organization’s size and usage.</li>" +
      "<li>• We aim to offer cost-effective solutions without compromising quality.</li></ul></div>",
  },
  {
    id: 10,
    quest: "How do you ensure a seamless transition during implementation with minimal disruption?",
    ans: "<div><div>To ensure minimal disruption during implementation, we:</div>" +
      "<ul className='ml-10 mb-3'><li>• Create a detailed project plan with key milestones and timelines.</li>" +
      "<li>• Work closely with your internal team to minimize any downtime.</li>" +
      "<li>• Conduct pilot testing in a controlled environment before full deployment.</li>" +
      "<li>• Offer extensive user training to ensure a smooth transition.</ul><div>Provide onsite and remote support during the golive phase to resolve any issues quickly.</div></div>",
  },
  {
    id: 11,
    quest: "Do you provide customized solutions tailored to my business needs?",
    ans: "<div><div>Yes, we offer fully customized Microsoft solutions that align with your business objectives. Our experts work with you to:</div>" +
      "<ul className='ml-10 mb-3'><li>• Assess your unique business processes</li>" +
      "<li>• Identify areas for automation and optimization</li>" +
      "<li>• Customize Microsoft platforms (like Dynamics 365, Power Platform, or Azure) to fit your specific workflows</li>" +
      "<li>• Build custom integrations with third-party applications or existing systems.</li></ul></div>",
  },
  {
    id: 12,
    quest: "How do you handle updates and new feature rollouts from Microsoft?",
    ans: "<div><div>We manage software updates and feature rollouts by:</div>" +
      "<ul className='ml-10 mb-3'><li>• Regularly monitoring Microsoft's product updates and new feature announcements.</li>" +
      "<li>• Ensuring timely installation of critical patches and security updates.</li>" +
      "<li>• Conducting compatibility testing to ensure updates don't disrupt your operations.</li>" +
      "<li>• Informing your team of new features and providing training or documentation to take full advantage of them.</li></ul></div>",
  },
  {
    id: 13,
    quest: "What industries do you specialize in for Microsoft solution implementation?",
    ans: "<div><div>We have experience implementing Microsoft solutions across various industries, including:</div>" +
      "<ul className='ml-10 mb-3'><li>• Finance and Accounting</li>" +
      "<li>• Manufacturing and Distribution</li>" +
      "<li>• Retail and Ecommerce</li>" +
      "<li>• Healthcare</li>" +
      "<li>• Education</li>" +
      "<li>• Professional Services</li>" +
      "<li>• Agriculture and more.</li></ul></div>",
  },
  {
    id: 14,
    quest: "Can you provide references or case studies of successful projects?",
    ans: "<div>Yes, we can provide case studies and references from previous clients who have benefited from our Microsoft solution implementations. These examples demonstrate how we have helped organizations optimize their processes, reduce costs, and increase productivity using Microsoft platforms." +
      "</div>",
  },
  {
    id: 15,
    quest: "What sets you apart from other Microsoft Certified Partners?",
    ans: "<div><div>Answer:<br/>Our key differentiators include:</div>" +
      "<ul className='ml-10 mb-3'><li>• Deep expertise across Microsoft technologies</li>" +
      "<li>• A personalized approach to every client, ensuring custom solutions that meet unique business needs</li>" +
      "<li>• Round-the-clock support and proactive monitoring</li>" +
      "<li>• Proven track record with successful project implementations and satisfied clients</li>" +
      "<li>• Strong focus on security, compliance, and long-term value for our clients.</li></ul></div>",
  }
];

export default faqData;

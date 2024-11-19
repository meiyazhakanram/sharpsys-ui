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
];

export default faqData;

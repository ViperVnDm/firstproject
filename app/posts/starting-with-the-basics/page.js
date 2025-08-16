import Link from 'next/link';

export default function Post() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <article className="post-body">
        <h1>Starting with the Basics: What Every AWS Architect Should Know First</h1>
        <p>
          When you’re just beginning your AWS architecture journey, the sheer number of services and buzzwords can feel overwhelming. But before you dive into Lambda, EKS, or AI/ML offerings, the most important thing you can do is master the basics—the foundations that everything else in AWS rests on. For any cloud architect, those foundations start with networking, IAM, and understanding how AWS organizes accounts at scale.
        </p>
        <h2>1. Networking: Your Foundation</h2>
        <p>
          In AWS, everything lives inside a Virtual Private Cloud (VPC). Whether you’re running a single EC2 instance, a container cluster, or a multi-tier enterprise app, the VPC dictates how your resources connect to each other and to the outside world.
        </p>
        <p><strong>Key things to know:</strong></p>
        <ul>
          <li><strong>Subnets</strong> – Private vs. public subnets define whether resources get direct internet access or stay internal.</li>
          <li><strong>Route tables & gateways</strong> – Internet Gateways, NAT Gateways, and VPC Peering are how you connect workloads to the outside world or across accounts/regions.</li>
          <li><strong>Security groups & NACLs</strong> – Security groups act as virtual firewalls on your resources; Network ACLs operate at the subnet level. Get these wrong and your workloads don’t talk.</li>
        </ul>
        <p>
          <strong>👉 Pro tip:</strong> Spend time really learning VPC design. Misconfigured networking is one of the top causes of headaches for new architects.
        </p>
        <h2>2. IAM: Identity and Access Management</h2>
        <p>
          If VPC is the skeleton, IAM is the nervous system. It decides who and what can do anything inside AWS.
        </p>
        <ul>
          <li><strong>Principals</strong> – Can be users, roles, or services.</li>
          <li><strong>Policies</strong> – JSON documents that allow or deny actions on resources.</li>
          <li><strong>Least privilege</strong> – Always start with the minimum permissions needed. Overly permissive IAM roles are one of the most common (and dangerous) missteps.</li>
        </ul>
        <p>
          <strong>👉</strong> IAM looks simple, but can become complex fast. My advice? Learn how to write a least-privilege policy by hand before relying on the console “wizards.”
        </p>
        <h2>3. Control Tower: Thinking Beyond One Account</h2>
        <p>
          As soon as your environment grows beyond a single developer project, you’ll need to think about multi-account strategy. This is where AWS Organizations and Control Tower come in.
        </p>
        <ul>
          <li><strong>Organizations</strong> – Lets you create multiple AWS accounts and apply policies across them.</li>
          <li><strong>Control Tower</strong> – Provides a blueprint for setting up a secure, governed multi-account environment with guardrails out of the box.</li>
        </ul>
        <p>
          Even if you’re starting small, understanding that AWS expects enterprises to use multiple accounts for isolation (prod vs. dev, workloads vs. shared services) is crucial.
        </p>
        <h2>4. Other First Principles Every Architect Should Know</h2>
        <p>A few more basics worth internalizing right away:</p>
        <ul>
          <li><strong>Regions and Availability Zones (AZs)</strong> – Architect for resilience by spreading workloads across AZs.</li>
          <li><strong>Shared Responsibility Model</strong> – AWS secures the cloud infrastructure; you secure your workloads and data.</li>
          <li><strong>Tagging strategy</strong> – From day one, use consistent tags for cost allocation, ownership, and automation. You’ll thank yourself later.</li>
        </ul>
        <h2>Wrapping Up</h2>
        <p>
          Before you worry about Kubernetes, AI, or serverless, start with VPCs, IAM, and Control Tower basics. Think of these as the foundation of your house: if they’re weak, no amount of cool technology on top will stand for long.
        </p>
        <p>
          In the next posts, I’ll dig deeper into each of these areas with hands-on examples and patterns I’ve used in real-world architectures.
        </p>
        <p>
          <Link href="/" className="text-blue-600 dark:text-blue-400">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}

import React from 'react';
import './styles.css'; // Import the CSS file if it's separate
import Link from '@docusaurus/Link';

function TechnologiesSection() {
  const technologies = [
    { name: 'Docker', tag: 'devops', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/docker-icon.png', link: 'docs/packages/from_hub/docker' },
    { name: 'Git', tag: 'devops', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png', link: 'docs/packages/from_hub/git' },
    { name: 'Kubernetes', tag: 'devops',  logo: 'https://user-images.githubusercontent.com/19824574/41482054-47a3a702-70a2-11e8-9561-de51c5f71220.png', link: 'docs/packages/from_hub/k8s' },
    { name: 'AWS CLI', tag: 'devops', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-aws-1869025-1583149.png', link: 'docs/packages/from_hub/awscli' },
    { name: 'Terraform', tag: 'devops', logo: 'https://static-00.iconduck.com/assets.00/terraform-icon-452x512-ildgg5fd.png', link: 'docs/packages/from_hub/terraform' },
    { name: 'Jenkins', tag: 'devops', logo: 'https://www.jenkins.io/images/logos/jenkins/jenkins.png', link: 'docs/packages/from_hub/jenkins' },
    { name: 'Python', tag: 'programming', logo: 'https://icons-for-free.com/iconfiles/png/512/super+tiny+icons+python-1324450764865983278.png', link: 'docs/packages/from_hub/python' },
    { name: 'Node.js', tag: 'programming',logo: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png', link: 'docs/packages/from_hub/node' },
    { name: 'Prometheus', tag: 'devops',logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png', link: 'docs/packages/from_hub/prometheus' },
    { name: 'Rust', tag: 'programming',logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/212px-Rust_programming_language_black_logo.svg.png', link: 'docs/packages/from_hub/rust' },
    { name: 'Cloudera Impala', tag: 'db',logo: 'https://geekflare.com/wp-content/uploads/2022/11/apache-impala-logo-1.png', link: 'docs/packages/from_hub/impala'},
    { name: 'Go', tag: 'programming',logo: 'https://gitconnected.com/public/images/tutorials/svg/golang.jpeg', link: 'docs/packages/from_hub/go' },
    { name: 'Visual Studio Code', tag: 'devmachine', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png', link: 'docs/packages/from_hub/vscode' },
    { name: 'Zsh', tag: 'devmachine',logo: 'https://ohmyz.sh/img/OMZLogo_BnW.png', link: 'docs/packages/from_hub/zsh' },
    { name: 'MacOS', tag: 'devmachine',logo: 'https://cdn-icons-png.flaticon.com/512/2/2235.png', link: 'docs/packages/from_hub/osx' },
    // Add more technologies here
  ];

  const renderTechnologies = (subject, tag) => {
    return (<div className="techBlock">
      <h2>{subject}</h2>
      {/* <h3>
        
      </h3> */}
      <ul>
        {technologies.filter(t=>t.tag==tag).map((tech, index) => (
          <li key={index}>
            <a href={tech.link}>
              <img src={tech.logo} alt={`${tech.name} logo`} />
              <span>{tech.name}</span>
            </a>
          </li>
        ))}
      </ul></div>);
  }

  return (
    <div className="technologies-section">
      
      <h2 className="highlight">CoCMD-HUB 
      </h2>
      <p className="hightlight2">
        A Public collection of CoCMD packages
      </p>
      <div>
        {renderTechnologies("Programming", "programming")}
      </div>
      <div>
        {renderTechnologies("Devops", "devops")}
      </div>
      <div>
        {renderTechnologies("Machine setup", "devmachine")}
      </div>
      <div>
        {renderTechnologies("Databases", "db")}
      </div>
      

      <div className="create-own">
      <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            or Create your own
          </Link>
          </div>
    </div>
  );
}

export default TechnologiesSection;

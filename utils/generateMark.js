// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // console.log("renderLicenseBadge: " + license)
  
    if (license == "No License") {
      return ""
    }
    return (
      `![License](<https://img.shields.io/badge/License-${license}-blue.svg>)`
    )
    // label-message-color, example: License-Apache 2.0-blue)
    // choices: ["Apache 2.0", "Boost Software License 1.0", "Mozilla Public License 2.0", "The MIT License", "No License"]
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == "No License") {
      return ""
    }
    return `* [License](#license)`
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license == "No License") {
      return ""
    }
    return `## License
    Licensed under ${license}
    `
}


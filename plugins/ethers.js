import { ethers } from "ethers";

export default ({ app }, inject) => {
  // const provider = new ethers.providers.CloudflareProvider();
  const provider = new ethers.providers.InfuraProvider("homestead", {
    projectId: "443ec86ea6ae445ea1499a403e14e899"
  });
  inject("provider", provider);
};

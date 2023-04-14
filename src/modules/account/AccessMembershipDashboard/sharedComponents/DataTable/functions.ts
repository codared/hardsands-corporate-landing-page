
// build the downloadable data
export const buildMemberDownloadableData = (
  filteredDownloadableData: any[]
) => {
  const downloadableData = filteredDownloadableData.map((item: any) => {
    return {
      name: item.fullName,
      email: item.email,
      role: item.corporatePosition,
      status: item.isActive ? "Active" : "Inactive",
      clicks: item.totalCardVisits,
    };
  });
  return downloadableData;
};

export const leadStructure = (item: any) => {
  return {
    name: item.name,
    title: item.title,
    location: item.location,
    about: item.about,
    phone: item.phone,
    url: item.url,
    city: item.city,
    company: item.company,
    position: item.position,
    text: item.text,
    email: item.email,
    instagram: item.instagram,
    twitter: item.twitter,
    bankAccountName: item.bankAccountName,
    bankName: item.bankName,
    bankAccountNumber: item.bankAccountNumber,
    status: item.status ? "Active" : "Inactive",
  };
};

export const buildLeadsDownloadableData = (filteredDownloadableData: any[]) => {
  const downloadableData = filteredDownloadableData.map((item: any) => {
    return leadStructure(item);
  });
  return downloadableData;
};

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

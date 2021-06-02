import API from "./index";

export const createGroup = (newGroup) => API.post("/group", newGroup);

export const fetchAGroup = (id) => API.get(`/group/${id}`);
export const fetchUserJoinedGroups = () => API.get(`/group/list/joinedByMe`);

export const addPendingMemberGroup = (groupId, userId) =>
  API.put(`/group/${groupId}/addPendingMember/${userId}`);
export const removePendingMember = (groupId, userId) =>
  API.put(`/group/${groupId}/removePendingMember/${userId}`);
export const addGroupMember = (groupId, userId) =>
  API.put(`/group/${groupId}/addMember/${userId}`);

export const deleteGroup = (id) => API.delete(`/group/${id}`);

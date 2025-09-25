import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";
import toast from "react-hot-toast";

export interface Dc {
  _id: string;
  name: string;
  email: string;
  number: string;
  district: string;
  state: string;
  address: string;
  createdAt?: string;
  updatedAt?: string;
}

// Input type (no _id for creating/updating)
export type DcInput = Omit<Dc, "_id" | "createdAt" | "updatedAt">;

const useDc = () => {
  const queryClient = useQueryClient();

  // 1️⃣ Fetch all DCs
  const allDc = useQuery<Dc[], Error>({
    queryKey: ["dc"],
    queryFn: async () => {
      const { data } = await api.get("/Dc");
      return Array.isArray(data.data) ? data.data : [];
    },
    initialData: [],
  });

  // 2️⃣ Create DC
  const createDc = useMutation<Dc, Error, DcInput>({
    mutationFn: async (newDc: DcInput) => {
      const { data } = await api.post("/Dc", newDc);
      return data.data;
    },
    onSuccess: (newDc) => {
      queryClient.setQueryData<Dc[]>(["dc"], (old = []) => [...old, newDc]);
      toast.success("DC added successfully ✅");
    },
    onError: () => {
      toast.error("Failed to add DC ❌");
    },
  });

// Update DC
const updateDc = useMutation<Dc, Error, { id: string; formData: DcInput }>({
  mutationFn: async ({ id, formData }) => {
    const { data } = await api.put(`/Dc/${id}`, formData);
    return data.data; 
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["dc"] }); 
  },
});



  // 4️⃣ Delete DC
  const deleteDc = useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/Dc/${id}`);
    },
    onSuccess: (_data, id) => {
      queryClient.setQueryData<Dc[]>(["dc"], (old = []) =>
        old.filter((dc) => dc._id !== id)
      );
      toast.success("DC deleted successfully 🗑️");
    },
    onError: () => {
      toast.error("Failed to delete DC ❌");
    },
  });

  return {
    allDc,
    createDc,
    updateDc,
    deleteDc,
  };
};

export default useDc;

import api from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export interface StationeryItem {
  _id?: string;
   type: string;
  rateOnLessQuantity?: number;
  quantityThreshold?: number;
  rateOnGreaterQuantity?: number;
  quantity: number;
}

// Order type
export interface StationeryOrder {
  _id: string;
  name: string;
  phoneNo: string;
  kioskId: string;
  address: string;
  pinCode: string;
  items: StationeryItem[];
  status?: string;  
  createdAt?: string;
  updatedAt?: string;
}

// Input type for creating order
type CreateOrderInput = Omit<StationeryOrder, "_id" | "createdAt" | "updatedAt">;

const useStationeryOrder = () => {
  const queryClient = useQueryClient();

  // ✅ Get all orders
  const allOrders = useQuery<StationeryOrder[], Error>({
    queryKey: ["stationeryOrders"],
    queryFn: async () => {
      const { data } = await api.get("/Order");
      return Array.isArray(data.data) ? data.data : [];
    },
    initialData: [],
  });

  // ✅ Create order
  const createOrder = useMutation<StationeryOrder, Error, CreateOrderInput>({
    mutationFn: async (newOrder) => {
      const { data } = await api.post("/Order", newOrder);
      return data.data;
    },
    onSuccess: (newOrder) => {
      queryClient.setQueryData<StationeryOrder[]>(["stationeryOrders"], (old = []) => [
        ...old,
        newOrder,
      ]);
    },
  });

  // ✅ Update order (status or any field)
  const updateOrder = useMutation<StationeryOrder, Error, StationeryOrder>({
    mutationFn: async (updatedOrder) => {
      const { data } = await api.put(`/Order/${updatedOrder._id}`, updatedOrder);
      return data.data;
    },
    onSuccess: (updatedOrder) => {
      queryClient.setQueryData<StationeryOrder[]>(["stationeryOrders"], (old = []) =>
        old.map((o) => (o._id === updatedOrder._id ? updatedOrder : o))
      );
    },
  });

  // ✅ Delete order
  const deleteOrder = useMutation<string, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/Order/${id}`);
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<StationeryOrder[]>(["stationeryOrders"], (old = []) =>
        old.filter((o) => o._id !== id)
      );
    },
  });

  return {
    allOrders,
    createOrder,
    updateOrder,
    deleteOrder,
  };
};

export default useStationeryOrder;

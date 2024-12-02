import { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteToggle } from "../services/user.service";

export const useToggleFavorite = () => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const mutationAdd = useMutation({
    mutationFn: async (id) => {
      await favoriteToggle(id);
    },
    onSuccess: () => queryClient.invalidateQueries(["get me"]),
  });

  const handleToggleFavorite = useCallback(
    (productId) => {
      if (isLoading) return;
      setIsLoading(true);
      mutationAdd.mutate(productId, {
        onSettled: () => setIsLoading(false),
      });
    },
    [mutationAdd, isLoading],
  );

  return { handleToggleFavorite, isLoading };
};

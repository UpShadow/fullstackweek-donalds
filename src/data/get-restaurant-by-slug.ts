import { db } from "@/lib/prima";

export const getRestaurantBySlug = async (slug: string) => {
  const restaurant = await db.restaurant.findUnique({ where: { slug: slug } });
  return restaurant;
};

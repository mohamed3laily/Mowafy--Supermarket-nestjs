export interface ProductReviewDTO {
  id: string;
  content: string;
  rating: number;
  productId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

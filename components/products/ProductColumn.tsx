import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
export const columns: ColumnDef<ProductTypes>[] = [
  {
    accessorKey: "name",
    header: () => <p style={{ textAlign: "center" }}>Tên sản phẩm</p>,
    cell: ({ row }) => (
      <p style={{ textAlign: "left" }}>{row.original.name}</p>
    ),
  },
  {
    accessorKey: "categories",
    header: () => <p style={{ textAlign: "center" }}>Loại sản phẩm</p>,
    cell: ({ row }) => (
      <p style={{ textAlign: "center" }}>
        {typeof row.original.categories === "object"
          ? row.original.categories?.name
          : row.original.categories}
      </p>
    ),
  },

  {
    accessorKey: "original",
    header: () => <p style={{ textAlign: "center" }}>Nguồn gốc</p>,
    cell: ({ row }) => (
      <p style={{ textAlign: "center" }}>{row.original.original}</p>
    ),
  },
  {
    accessorKey: "price",
    header: () => <p style={{ textAlign: "center" }}>Giá cả</p>,
    cell: ({ row }) => (
      <p style={{ textAlign: "center" }}>{row.original.price}</p>
    ),
  },
  {
    id: "action",
    cell: ({ row }) => <Delete id={row.original._id} item="products" />,
  },
];

import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
export const columns: ColumnDef<CollectionsTypes>[] = [
  {
    accessorKey: "name",
    header: "Tên danh mục",
    cell: ({row}) => <p>{row.original.name}</p>
  },
  {
    accessorKey: "products",
    header: "Tổng số sản phẩm đã có",
    cell: ({row}) => <p>{row.original.products.length}</p>
  },
  {
    id: "action",
    cell: ({ row }) => <Delete id={row.original._id} item="collections" />,
  },
];

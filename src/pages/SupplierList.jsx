import SupplierDetails from "../components/SupplierDetails";
import { Fragment, useState } from "react";

function SupplierList() {
    const [suppliers, setSuppliers] = useState([
        {
            id: 1,
            name: "Electro World",
            contactEmail: "support@electroworld.com",
            contactPhone: "+1234567890",
            address: {
                street: "1234 Tech Blvd",
                city: "New York",
                state: "NY",
                zipCode: "10001",
                country: "USA"
            },
            products: ["Smartphone", "Laptop", "Headphones"],
            rating: 4.5,
            totalSales: 5000,
            verified: true,
            joinedDate: "2022-01-10",
            logoUrl: "https://example.com/logo-electroworld.png"
        },
        {
            id: 2,
            name: "Fashion Hub",
            contactEmail: "info@fashionhub.com",
            contactPhone: "+9876543210",
            address: {
                street: "5678 Style Ave",
                city: "Los Angeles",
                state: "CA",
                zipCode: "90001",
                country: "USA"
            },
            products: ["T-shirts", "Jeans", "Jackets"],
            rating: 4.2,
            totalSales: 8000,
            verified: false,
            joinedDate: "2021-05-15",
            logoUrl: "https://example.com/logo-fashionhub.png"
        },
        {
            id: 3,
            name: "Home Essentials",
            contactEmail: "support@homeessentials.com",
            contactPhone: "+1122334455",
            address: {
                street: "91011 Comfort St",
                city: "Chicago",
                state: "IL",
                zipCode: "60601",
                country: "USA"
            },
            products: ["Furniture", "Bedding", "Decor"],
            rating: 4.8,
            totalSales: 10000,
            verified: true,
            joinedDate: "2020-11-25",
            logoUrl: "https://example.com/logo-homeessentials.png"
        }
    ]);

    const deleteSupplier = (supplierId) => {
        const filteredSuppliers = suppliers.filter(supplier => supplier.id !== supplierId);
        setSuppliers(filteredSuppliers);
        alert('Deleted supplier successfully');
    };

    const addSupplier = (supplierInfo) => {
        setSuppliers([...suppliers, supplierInfo]);
    };
    return (
        <div>
            <h2 className="text-center text-4xl text-blue-500 mt-4 border-b pb-2">Suppliers</h2>
            <div class="flex flex-wrap justify-start gap-6 p-5">
                {suppliers.map(supplier => (
                    <div key={supplier.id}>
                        <SupplierDetails supplierInfo={supplier} deleteSupplier={deleteSupplier}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SupplierList;
function SupplierDetails(props) {
    const { supplierInfo, deleteSupplier } = props;

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-800 p-4 text-white">
                <h2 className="text-xl font-semibold">{supplierInfo.name}</h2>
                <p className="text-sm">Joined: {supplierInfo.joinedDate}</p>
            </div>

            <div className="p-4">
                <div className="mb-4">
                    <h3 className="text-gray-700 font-bold">Address:</h3>
                    <p className="text-gray-600">{supplierInfo?.address?.street}, {supplierInfo?.address?.city}, {supplierInfo?.address?.state}, {supplierInfo?.address?.country}, {supplierInfo?.address?.zipCode}.</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-gray-700 font-bold">Contact:</h3>
                    <p className="text-gray-600">Email: {supplierInfo.contactEmail}</p>
                    <p className="text-gray-600">Phone: {supplierInfo.contactPhone}</p>
                </div>

                <div className="mb-4">
                    <h3 className="text-gray-700 font-bold">Products:</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Smartphone</li>
                        <li>Laptop</li>
                        <li>Headphones</li>
                    </ul>
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-gray-700 font-bold">Rating:</h3>
                        <p className="text-yellow-500 font-semibold">4.5 / 5</p>
                    </div>
                    <div>
                        <h3 className="text-gray-700 font-bold">Total Sales:</h3>
                        <p className="text-gray-600">5,000</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 p-4 text-center flex justify-between items-center">
                <span className={`px-3 py-1 text-white text-xs font-semibold rounded-full ${supplierInfo.verified ? 'bg-green-500' : 'bg-red-500'}`}>
                    {supplierInfo.verified ? 'Verified' : 'Not Verified'}
                </span>
                <button class="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full hover:bg-red-600"
                    onClick={() => deleteSupplier(supplierInfo.id)}>
                    Delete
                </button>

            </div>
        </div>
    )
}
export default SupplierDetails;
const classList = document.getElementById('class_List');

classList.innerHTML = `
    <div class="titel h-[7rem] bg-[#e0e1dd] shadow-lg ">
        <div class="title-name flex justify-items-start items-center h-[100%] pl-[5rem] text-3xl font-bold  ">
            <h1>Class List</h1>
        </div>
    </div>
    <div class="flex justify-center items-center h-auto m-6">
        <div class="max-w-4xl mx-auto bg-[#0d1b2a] shadow-md rounded-lg p-6">
            <!-- Buttons and Search -->
            <div class="flex justify-between items-center mb-4">
                <div class="space-x-2">
                    <button class="cursor-pointer rounded-md border border-[#415a77] px-4 py-2 text-[#8e9baa] transition duration-300 hover:bg-[#778da944] hover:text-[#e0e1dd] active:scale-95 active:bg-[#415a77]">
                        Add Class
                    </button>
                    <button class="cursor-pointer rounded-md border border-[#415a77] px-4 py-2 text-[#8e9baa] transition duration-300 hover:bg-[#778da944] hover:text-[#e0e1dd] active:scale-95 active:bg-[#415a77]">
                            View Archived
                        </button>
                    </div>
                <input type="text" placeholder="Search..." class="w-1/4 rounded-md border p-2 pt-1.5 pb-1.5 pl-5 text-[1rem] font-bold text-[#e0e1dd]" />
            </div>

            <!-- Table -->
            <table class="w-full border-collapse rounded-lg rounded-tr-full text-[#e0e1dd]">
                <thead class="bg-[#415a77]">
                    <tr>
                        <th class="p-3 text-left font-semibold">DESCRIPTION</th>
                        <th class="p-3 text-left font-semibold">STUDENT COUNT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-[#415a77] shadow-lg shadow-black cursor-pointer hover:bg-[#778da9] ">
                        <td class="p-3 ">English</td>
                        <td class="p-3 ">4</td>
                    </tr>
                    <tr  class="border-b border-[#415a77] shadow-lg shadow-black cursor-pointer hover:bg-[#778da9] ">
                        <td class="p-3 ">Hindi</td>
                        <td class="p-3 ">4</td>
                    </tr>
                    <tr  class="border-b border-[#415a77] shadow-lg shadow-black cursor-pointer hover:bg-[#778da9] ">
                        <td class="p-3 ">Math</td>
                        <td class="p-3">3</td>
                    </tr>
                </tbody>
            </table>

            <!-- Pagination -->
            <div class="mt-4 flex items-center justify-between">
                <p class="text-[#8e9baa]">Page <strong>1</strong> of 1 :: <strong>5</strong> students</p>
                <div class="flex space-x-2">
                    <button class="cursor-pointer rounded-md  px-2 py-1 text-[#8e9baa] hover:bg-[#415a7779] transition duration-300 active:scale-95 ">«</button>
                    <button class="cursor-pointer rounded-md  px-2 py-1 text-[#8e9baa] hover:bg-[#415a7779] transition duration-300 active:scale-95 ">‹</button>
                    <button class="rounded-md  cursor-pointer bg-[#778da9] px-3 py-1 text-white">1</button>
                    <button class="cursor-pointer rounded-md  px-2 py-1 text-[#8e9baa] hover:bg-[#415a7779] transition duration-300 active:scale-95 ">›</button>
                    <button class="cursor-pointer rounded-md  px-2 py-1 text-[#8e9baa] hover:bg-[#415a7779] transition duration-300 active:scale-95 ">»</button>
                </div>
            </div>
        </div>
</div>
`;

// class="bg-gray-100 p-6"
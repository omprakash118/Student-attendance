const notice = document.getElementById('notice');

notice.innerHTML = `
    <div class="mx-auto max-w-4xl">

        <div class="flex justify-between items-center text-center m-3 p-3 bg-[#1b263b] rounded-2xl  ">
        <h2 class=" text-2xl font-bold text-[#8e9baa]">Notices</h2>
        <button class="w-10 h-8 text-center rounded-2xl  text-[#8e9baa] hover:bg-[#778da9a3] bg-[#778da944] active:bg-[#415a77] border cursor-pointer  transition duration-300 active:scale-95 border-[#415a77]   hover:text-[#e0e1dd]" ><i class="fa-solid fa-file-circle-plus"></i></button>
    </div>

        <div class="space-y-4 p-3">
            <!-- Notice Card -->
            <div class="rounded-lg border border-[#8e9baa] bg-[#1b263b] p-4 shadow-md">
                <h3 class="text-lg font-semibold text-[#e0e1dd]">Exam Date Update</h3>
                <p class="mt-2 text-[#8e9baa]">The exam date is postponed to 15th March.</p>
                <div class="mt-3 text-sm text-[#778da9]">
                    <p>Posted by: <span class="font-medium">Admin</span></p>
                    <p>09 March 2025</p>
                </div>
            </div>

            <div class="rounded-lg border border-[#8e9baa] bg-[#1b263b] p-4 shadow-md">
                <h3 class="text-lg font-semibold text-[#e0e1dd]">Holiday Notice</h3>
                <p class="mt-2 text-[#8e9baa]">The college will remain closed on 10th March.</p>
                <div class="mt-3 text-sm text-[#778da9]">
                    <p>Posted by: <span class="font-medium">Principal</span></p>
                    <p>08 March 2025</p>
                </div>
            </div>
        </div>
    </div>
`;


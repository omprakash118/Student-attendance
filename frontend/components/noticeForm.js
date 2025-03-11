const noticeForm = document.getElementById('noticeForm');

noticeForm.innerHTML = `
    <div class="m-6 flex h-auto items-center justify-center font-mono text-[#e0e1dd]">
    <div class="h-auto min-h-0 w-[50%] shadow-2xl shadow-black p-10 pb-15 rounded-2xl ">
      <div class="mx-auto mt-6 max-w-2xl rounded-lg border border-[#8e9baa] bg-[#1b263b] p-6 shadow-lg">
        <h2 class="mb-4 text-xl font-semibold text-[#e0e1dd]">Add Notice</h2>
        <form>
          <input type="text" placeholder="Title"
            class="mb-3 w-full rounded-lg border border-[#778da9] bg-transparent px-4 py-2 text-[#e0e1dd] placeholder-[#8e9baa] focus:outline-[#415a77]"
            required />

          <!-- Dropdown Menu -->
          <div class="mb-3 relative">
            <select id="userType"
                    class="w-full rounded-lg border border-[#778da9] bg-transparent px-4 py-2 text-[#e0e1dd] placeholder-[#8e9baa] focus:outline-[#415a77] appearance-none cursor-pointer"
                    required>
                    <option value="" disabled selected class="bg-[#1b263b]">Select the type of user</option>
                    <option value="all" class="bg-[#1b263b] ">All</option>
                        <option value="student" class="bg-[#1b263b]">Teacher</option>
                        <option value="teacher" class="bg-[#1b263b]">Student</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8e9baa]">
                          <i class="fa-solid fa-angle-down"></i>
                    </div>
              </div>

                <textarea placeholder="Description"
                class="mb-3 w-full rounded-lg border border-[#778da9] bg-transparent px-4 py-2 text-[#e0e1dd] placeholder-[#8e9baa] focus:outline-[#415a77]"
                required></textarea>

                <!-- File Upload -->
                <div class="mb-3 flex items-center justify-between">
                    <label for="chooseFile"
                      class="rounded-md   text-[#8e9baa] hover:bg-[#778da9a3] bg-[#778da944] active:bg-[#415a77] border cursor-pointer  transition duration-300 active:scale-95 border-[#415a77]  px-4 py-2 hover:text-[#e0e1dd]">
                      Add File </label>
                    <input type="file" id="chooseFile" class="hidden" />
                    <span id="fileName" class="text-[#8e9baa] text-sm truncate max-w-xs">No file chosen</span>
                </div>

                <!-- Submit Button -->
                    <button type="submit"
                        class="w-full rounded-md   text-[#8e9baa] hover:bg-[#778da9a3] bg-[#778da944] active:bg-[#415a77] border cursor-pointer  transition duration-300 active:scale-95 border-[#415a77]  px-4 py-2 hover:text-[#e0e1dd]">Post
                        Notice</button>
                </form>
            </div>
        </div>
    </div>
`;


// For file choose
document.getElementById('chooseFile').addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : 'No file chosen';
    document.getElementById('fileName').textContent = fileName;
});
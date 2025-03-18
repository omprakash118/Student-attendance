const classAdd = document.getElementById("add_class");

classAdd.innerHTML = `
<div class="titel h-[7rem] bg-[#e0e1dd] shadow-lg ">
        <div class="title-name flex justify-items-start items-center h-[100%] pl-[5rem] text-3xl font-bold  ">
            <h1>Add New Class</h1>
        </div>
    </div>
        <div class="flex justify-center items-center h-auto m-6">
        <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <!-- Header -->
        <h2 class="text-lg font-semibold text-gray-700 border-b pb-2">CLASS DETAILS</h2>

        <!-- Form -->
        <form class="mt-4">
            <div class="grid grid-cols-2 gap-4 items-center">
                <!-- Description -->
                <label class="text-gray-700 font-medium">Description</label>
                <input type="text" class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter class name">

                <!-- Add Students -->
                <label class="text-gray-700 font-medium">Add Students</label>
                <select class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Please choose students</option>
                    <option>Student 1</option>
                    <option>Student 2</option>
                    <option>Student 3</option>
                </select>
            </div>

            <!-- Save Button -->
            <div class="mt-6 flex justify-end">
                <button type="submit" class="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
                    Save
                </button>
            </div>
        </form>
    </div>
    </div>
`

// class="bg-gray-100 p-6"
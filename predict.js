<div class="flex flex-wrap gap-2 mb-4" id="suggestionChips">
    <button onclick="quickSearch('Insurances accepted')" class="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors">
        📋 Insurance Info
    </button>
    <button onclick="quickSearch('Dr. Smith specialty')" class="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors">
        👨‍⚕️ Clinician Specialties
    </button>
    <button onclick="quickSearch('Average wait times')" class="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors">
        ⏳ Wait Times
    </button>
    <button onclick="quickSearch('Initial intake price')" class="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors">
        💰 Pricing
    </button>
</div>

<script>
    // New function to handle chip clicks
    function quickSearch(queryText) {
        const input = document.getElementById('queryInput');
        input.value = queryText;
        
        // Visual feedback: briefly highlight the input
        input.classList.add('ring-2', 'ring-indigo-400');
        setTimeout(() => input.classList.remove('ring-2', 'ring-indigo-400'), 500);
        
        // Execute the search automatically
        predictAnswer();
    }
</script>

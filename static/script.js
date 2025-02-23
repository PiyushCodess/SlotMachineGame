document.addEventListener("DOMContentLoaded", function() {
    const balanceElement = document.getElementById("balance");
    let balance = 100;
    const betInput = document.getElementById("bet");
    const spinButton = document.getElementById("spinButton");
    const slots = [
        document.getElementById("slot1"),
        document.getElementById("slot2"),
        document.getElementById("slot3")
    ];
    const resultElement = document.getElementById("result");
    const symbols = ["🍒", "🍋", "🍊", "🍉", "⭐", "🔔"];

    spinButton.addEventListener("click", function() {
        let betAmount = parseInt(betInput.value);
        if (betAmount > balance || betAmount <= 0) {
            resultElement.textContent = "Invalid bet amount!";
            return;
        }

        // Spin the slots
        let spinResults = [];
        for (let i = 0; i < slots.length; i++) {
            let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            slots[i].textContent = randomSymbol;
            spinResults.push(randomSymbol);
        }

        // Check for a win
        if (spinResults[0] === spinResults[1] && spinResults[1] === spinResults[2]) {
            let winnings = betAmount * 5;
            balance += winnings;
            resultElement.textContent = `🎉 You win $${winnings}! 🎉`;
        } else {
            balance -= betAmount;
            resultElement.textContent = "😢 You lost! Try again.";
        }

        // Update balance
        balanceElement.textContent = balance;
    });
});

contract MyToken {
        event Transfer(address indexed from, address indexed to, uint256 value);
        /* This creates an array with all balances */
        mapping (address => uint256) public balanceOf;
        string public name;
        string public symbol;
        uint8 public decimals;

        function MyToken(uint256 initialSupply, string tokenName, string tokenSymbol, uint8 decimalUnits) public {
          balanceOf[msg.sender] = initialSupply;
              // Give the creator all initial tokens
          name = tokenName;                                   // Set the name for display purposes
          symbol = tokenSymbol;                               // Set the symbol for display purposes
          decimals = decimalUnits;                            // Amount of decimals for display purposes
    }

        /* Send coins */
        function transfer(address _to) public {
            require(balanceOf[msg.sender] >=55 && balanceOf[_to] + 55 >= balanceOf[_to]);
            balanceOf[msg.sender] -= 55;
            balanceOf[_to] += 55;
            emit Transfer(msg.sender, _to,55);
        }

    }

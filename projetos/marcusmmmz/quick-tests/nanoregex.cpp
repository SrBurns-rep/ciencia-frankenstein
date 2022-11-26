#include <iostream>

bool isValid(std::string str) {
    bool hasSeenDotAlready = false;

	// Reject leading zeros (like 000001)
	if (str.length() >= 2 && str.at(0) == '0' && str.at(1) != '.') return false;

    for (int i = 0; i < str.length(); i++) {
		char c = str.at(i);

		if (c == '.') {
			if (hasSeenDotAlready) return false;

			hasSeenDotAlready = true;
		} else if (!(c >= '0' && c <= '9')) {
			return false;
		}
	}

	return true;
}

int main() {
	// std::cout << isValid("1");
    // std::cout << isValid("00");
	// std::cout << isValid("0");
	// std::cout << isValid("0.1");
	std::cout << isValid(".01");
	// std::cout << isValid("-5");
	// std::cout << isValid("7.234p54");
	// std::cout << isValid("+31");
	// std::cout << isValid("3,14");
	// std::cout << isValid("");

	// std::cout << isValid("00");
	// std::cout << isValid("01");
	// std::cout << isValid("0000000000000000000000000000001");
    return 0;
}

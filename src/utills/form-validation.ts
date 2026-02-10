// Allow only letters and space
export const allowOnlyLetters = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const char = e.key;
  if (!/^[a-zA-Z\s]$/.test(char)) {
    e.preventDefault();
  }
};

// Prevent space as first character
export const preventLeadingSpace = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === " " && (e.currentTarget.selectionStart ?? 0) === 0) {
    e.preventDefault();
  }
};

// Allow only numbers
export const allowOnlyNumbers = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (!/^[0-9]$/.test(e.key)) {
    e.preventDefault();
  }
};

// Prevent spaces in email
export const preventSpaces = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === " ") {
    e.preventDefault();
  }
};

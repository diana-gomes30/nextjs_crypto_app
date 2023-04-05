export const useTest = () => {
  const { result2 } = useTest2();
  const result = () => 'Test';

  return { result, result2 };
};

export const useTest2 = () => {
  const result2 = 'Test2';

  return { result2 };
};

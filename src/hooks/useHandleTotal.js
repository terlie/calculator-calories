const useHandleTotal = activeItems => {
  let t = 0;
  for (let i in activeItems) {
    t = t + (activeItems[i].calories / 100) * activeItems[i].currentWeight;
  }

  return t.toFixed(0);
};

export default useHandleTotal;

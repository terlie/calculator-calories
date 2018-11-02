const useHelperForHandleItems = (
  currentItem,
  activeItems,
  handleItems,
  currentWeight
) => {
  if (activeItems[currentItem.id]) {
    delete activeItems[currentItem.id];
  } else {
    activeItems[currentItem.id] = {
      ...currentItem,
      currentWeight
    };
  }

  return handleItems(activeItems);
};

export default useHelperForHandleItems;

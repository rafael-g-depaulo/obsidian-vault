export const groupBy =
  <Item, Key extends string | number = string>(getGroup: (item: Item) => Key) =>
  (items: Item[]): { [key in Key]: Item[] } =>
    items.reduce(
      (acc, cur) => ({
        ...acc,
        [getGroup(cur)]: [...(acc[getGroup(cur)] ?? []), cur],
      }),
      {} as { [key in Key]: Item[] }
    )

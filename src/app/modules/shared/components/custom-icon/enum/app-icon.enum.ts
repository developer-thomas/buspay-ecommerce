export enum AppIcon {
    ProductSearch,
    ProductPrice,
    User,
    ProductTag,
    AddIcon,
    TrashIcon
}

export const ICON_MAP: Record<AppIcon, string> = {
    [AppIcon.ProductSearch]: 'featherSearch',
    [AppIcon.ProductPrice]: 'featherDollarSign',
    [AppIcon.User]: 'featherUser',
    [AppIcon.ProductTag]: 'featherTag',
    [AppIcon.AddIcon]: 'featherPlus',
    [AppIcon.TrashIcon]: 'featherTrash2',
};


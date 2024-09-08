import type { FC, ReactNode } from "react";
import { css } from "styled-system/css";

type Props = {
	children: ReactNode;
};
export const PageContainer: FC<Props> = ({ children }) => {
	return <div className={css({ margin: "8px" })}>{children}</div>;
};

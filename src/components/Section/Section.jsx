import { SectionTitle, StatsSection } from "./Section.styled";

export const Section = ({title, children}) => {
    return (
        <StatsSection>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </StatsSection>
    )
}
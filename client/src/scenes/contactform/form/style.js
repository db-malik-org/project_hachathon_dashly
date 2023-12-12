import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    form: {
        paddingTop: theme.spacing.md,
        backgroundColor: theme.secondary,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    input: {
        marginBottom: theme.spacing.md,
    },
    title: {
        color: '#ffffff', // 设置标题颜色为白色
    },
    button: {
        backgroundColor: "#ffda85",
        color: theme.black,
        padding: "10px 20px",
        "&:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
        },
    },
}));

export default useStyles;
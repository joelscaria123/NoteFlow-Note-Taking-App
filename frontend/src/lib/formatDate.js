export const formatDate = (value) => {
    
        return new Date(value)
        .toLocaleString(
            "en-US",{
                year: "numeric",
                 month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
        })

}